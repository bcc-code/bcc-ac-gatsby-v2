const _ = require('lodash');
const path = require('path');
const { getSubTopicPosts, createSubTopicPages } = require('./hjelper');
const ac_strings = require('../../src/strings/ac_strings.js');
const { formatScope, typesAll, formatsAll } = require('../../src/strings/static/topic-ids.js');
const query = `{
    ac {

        ${
			formatsAll.podcast
				? `podcasts:topic (id:${formatsAll.podcast.keyId}){
            noOfPosts
        }`
				: ''
		}
          
        playlists {
            id
            slug
        }
    }
}`;

module.exports = async function generateTypes(data) {
	console.log('generating type recommendations');

	const { actions, graphql, contextPosts, subTopics, node: type, nodeInfo, breadcrumb } = data;

	const { createPage } = actions;

	const typeFormatEach = {
		info: nodeInfo,
		items: []
	};
	for (let j = 0; j < subTopics.length; j++) {
		const subTopic = subTopics[j];

		const find = formatScope.find(f => `${f.keyId}` === `${subTopic.id}`);

		if (find) {
			const geFormatPostsQuery = getSubTopicPosts(type.id, subTopic.id);

			await graphql(geFormatPostsQuery).then(subTopicPostRes => {
				if (subTopicPostRes.errors) {
					console.log(subTopicPostRes.errors);
					throw new Error(subTopicPostRes.errors);
				}
				const allPosts = subTopicPostRes.data.ac.topic.somePosts.data;
				const totalCount = subTopicPostRes.data.ac.topic.noOfPosts;
				typeFormatEach.items.push({
					key: find.keyname,
					name: subTopic.name,
					to: `${type.slug}/`,
					typeSlug: `${type.slug}`,
					formatSlug: `${subTopic.slug}`,
					count: totalCount
				});

				return createSubTopicPages({
					type: nodeInfo.key,
					breadcrumb: [
						{
							name: type.name,
							to: type.slug
						}
					],
					createPage,
					allPosts,
					topic: type,
					subTopic,
					totalCount,
					isTopic: false
				});
			});
		}
	}

	const hasPlaylist = process.env.LISTEN_SECTION === 'all';
	const hasPodcast = process.env.LISTEN_SECTION === 'all' || process.env.LISTEN_SECTION === 'podcast_only';
	if (`${type.id}` === `${typesAll.listen.keyId}` && hasPodcast) {
		const result = await graphql(query)
			.then(res => {
				if (res.errors) {
					throw new Error(res.errors.join);
				}
				return res;
			})
			.catch(error => {
				console.error(error);
			});

		if (result.data && result.data.ac) {
			const { podcasts, playlists } = result.data.ac;
			if (playlists) {
				const playlistPage = {
					title: ac_strings.playlist,
					slug: ac_strings.slug_playlist
				};
				if (hasPlaylist) {
					const playlistItem = {
						key: 'playlist',
						name: playlistPage.title,
						to: playlistPage.slug,
						count: playlists.length
					};

					typeFormatEach['playlist'] = playlistItem;
				}
			}
			if (podcasts) {
				const podcastPage = {
					title: ac_strings.podcast,
					slug: ac_strings.slug_podcast
				};
				const podcastCount = podcasts.noOfPosts;

				if (hasPodcast) {
					const podcastItem = {
						key: 'podcast',
						name: podcastPage.title,
						to: podcastPage.slug,
						count: podcastCount
					};
					typeFormatEach['podcast'] = podcastItem;
				}
			}
		}
	}

	typeFormatEach.items.sort((a, b) => {
		if (b.key === 'animation') {
			return 1;
		}
		if (a.key === 'animation') {
			return -1;
		} else {
			return b.count - a.count;
		}
	});
	const today = new Date();

	const typekey = nodeInfo.key;
	const pagePath = `${type.slug}`;
	const context = {
		pagePath,
		pageType: 'category',
		updated_at: today.toDateString(),
		typekey,
		title: type.name,
		breadcrumb,
		items: subTopics,
		...typeFormatEach,
		...contextPosts
	};

	createPage({
		path: pagePath,
		component: path.resolve(`./src/templates/recommend/${typekey}-recommend.tsx`),
		context
	});
};
