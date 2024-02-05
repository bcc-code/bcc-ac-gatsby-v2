const path = require('path');
const { postQuery, getMultiPosts } = require('gatsby-source-ac/helpers');
//const {topicQuery} = require('gatsby-source-ac/helpers')
const { typeScope, formatScope, formatsIds, typeIds, groupAll } = require('../src/strings/static/topic-ids');
const endpoints = require('../src/strings/static/endpoints');
const { processRecommendationContext, getRandomFeatured } = require('../src/helpers/normalizers');
const { categorySorted } = require('./helper');
const baseUrl = endpoints.api_url;
//${postQuery}
const headers = {
	'x-lang': process.env.LANG_CODE
};

const topicQuery = `
    id
    name
    slug
    noOfPosts
    excerpt
    image {
        src
        srcset
        dataUri
      }
    somePosts(first:12){
        data {
            ${postQuery}
        }
      }
`;
const query = `{
    allAcNodeSetting {
        nodes {
            popular_posts {
                ${postQuery}
            }
            featured_posts {
                ${postQuery}
            }
        }
    }

    ac {

        latestPosts:posts(page:1,first:12){
            data {
                ${postQuery}
            }
          }
        featuredTopics:topics(featured:true) {
        	${topicQuery}
        }
        formats:topics(group_id:${groupAll.format}){
            ${topicQuery}
        }
    }
}`;

const getTopic = id => `{
    ac {
        topic(id:${id}){
            ${topicQuery}
        }
    }
}`;

// featuredTopics
const getPopularQuery = `{
    ac {
        popularPosts {
            slug
        }

        popularTopics(count:20) {
            id
            slug
        }
    }
}`;

module.exports = function generatePages(actions, graphql) {
	const { createPage } = actions;
	return graphql(query).then(async result => {
		if (result.errors) {
			result.errors.forEach(e => console.error(e.toString()));
			return Promise.reject(result.errors);
		} else {
			const { allAcNodeSetting, ac } = result.data;

			const featuredPosts = allAcNodeSetting.nodes[0].featured_posts.filter(
				item => item.slug !== 'dummy-content'
			);

			const popularPostsAll = {
				static: allAcNodeSetting.nodes[0].popular_posts.filter(item => item.slug !== 'dummy-content')
			};

			const staticTopics = [];
			for (let i = 0; i < ac.featuredTopics.length; i++) {
				const item = ac.featuredTopics[i];
				const shouldFilter = formatsIds[`${item.id}`] || typeIds[`${item.id}`];
				if (!shouldFilter) {
					staticTopics.push({
						...item,
						posts: item.somePosts.data
					});
				}
			}
			const popularTopicsAll = {
				static: staticTopics
			};

			await graphql(getPopularQuery)
				.then(async popularRes => {
					const { popularPosts, popularTopics } = popularRes.data.ac;
					if (popularPosts) {
						popularPostsAll['dynamic'] = await getMultiPosts(
							popularPosts.map(node => node.id),
							baseUrl,
							headers
						).catch(err => {
							console.error(err);
							throw new Error(err.message);
						});
					}

					if (popularTopics) {
						const popularTopicsUnfilteredIDs = popularTopics.map(node => node.id);
						popularTopicsAll['dynamic'] = [];

						for (let k = 0; k < popularTopicsUnfilteredIDs.length; k++) {
							const item = popularTopicsUnfilteredIDs[k];
							const hasType = typeScope.find(t => `${t.id}` === `${item}`);
							if (!hasType) {
								const hasFormat = formatScope.find(f => `${f.id}` === `${item}`);
								if (!hasFormat) {
									const getTopicQuery = getTopic(item);

									await graphql(getTopicQuery)
										.then(async res => {
											if (res.data?.ac?.topic?.somePosts.data) {
												const { somePosts, ...topic } = res.data.ac.topic;
												const allPosts = somePosts.data;
												popularTopicsAll['dynamic'].push({ ...topic, posts: allPosts });
											} else {
												if (! process.env.SUPER_SLIM_DEV_MODE) {
													throw new Error('not able to find posts for this topic');
												}
											}
										})
										.catch(err => {
											throw new Error(err.message);
										});
								}
							}
						}
					}
				})
				.catch(error => {
					console.warn('Failed to get popular posts and popular topics');
					console.error(error);
				});
			const latestPosts = ac.latestPosts.data;
			const popularPosts =
				popularPostsAll.dynamic && popularPostsAll.dynamic.length > 0
					? popularPostsAll.dynamic
					: popularPostsAll.static;
			const props = processRecommendationContext({ popularPosts, featuredPosts, latestPosts });
			const { latest, popular, featured } = props;
			const today = new Date();
			const pagePath = '/';

			const categoryOrder = categorySorted();
			let formats = [];
			categoryOrder.forEach(element => {
				const find = ac.formats.find(item => `${item.id}` === `${element.id}`);
				if (find) {
					formats.push(find);
				} else {
					formats.push(element);
				}
			});

			formats = formats.filter(item => item && item.image);

			const context = {
				pagePath,
				updated_at: today.toDateString(),
				latest,
				featured,
				popular,
				formats,
				mixedFeaturedPosts: [
					getRandomFeatured({ latest, popular, featured }),
					getRandomFeatured({ latest, popular, featured }),
					getRandomFeatured({ latest, popular, featured })
				],
				popularTopics: popularTopicsAll
			};
			createPage({
				path: pagePath,
				component: path.resolve('./src/templates/page/home.tsx'),
				context
			});

			/*               createPage({
                path: `/home-v2-beta`,
                component: path.resolve('./src/templates/page/home-v2-beta.tsx'),
                context
              }) */
		}
	});
};
