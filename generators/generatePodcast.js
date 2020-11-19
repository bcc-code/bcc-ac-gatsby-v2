const _ = require('lodash')
const path = require('path')
const ac_strings=require('../src/strings/ac_strings.js')
const TS = require('../src/strings')
/* SETUP */

const query = `{
  ac {
    allPages {
      id
      title
      slug
      label
      flexibleContent
    }

  }
}`

/* BUILDER */

module.exports = function generatePages(actions, graphql) {
  const { createPage } = actions
  const themePages=[]

  const podcastHosts=[]
  const aboutUsChildren=[]
  return graphql(query).then(result=>{
    console.log("Generating pages")
    if (result.errors){
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    } else {
      const pageInfo = result.data.ac.allPages
      const podcast = {
        title:ac_strings.podcast,
        slug:ac_strings.slug_podcast
      }
      const aboutMain = result.data.ac.about
      const navTopicsItem={name:ac_strings.topic,to:TS.slug_topic}
     

      _.each(pageInfo,(page)=>{
        if (page && page.label==="podcast-host"){
            podcastHosts.push(page)      
        }  

          let context = {
            ...page,
              breadcrumb:[
                {
                  name:page.title,
                  to:page.slug
                }
              ]
          }

          createPage({
            path: `${page.slug}`,
            component: path.resolve(`./src/templates/page/podcast.tsx`),
            context,
          })
        })
 
      //{name:ac_strings.topic,to:TS.slug_topic}
      // topic
      createPage({
        path: `${ac_strings.topic}`,
        component: path.resolve(`./src/templates/page/topics.tsx`),
        context:{
          title:TS.slug_topic,
          themes:themePages,
          breadcrumb:[
            navTopicsItem
          ]
        }, 
      })


      // about us
      createPage({
        path: `${aboutMain.slug}`,
        component: path.resolve(`src/templates/page/about-us.tsx`),
        context:{
          title:aboutMain.title,
          id:aboutMain.id,
          childPages:aboutUsChildren,
          breadcrumb:[]
        },
      })
      
      // podcast and hosts
      const allHostsSlug= []
      for (let i =0;i<podcastHosts.length;i++){
        const hostPage = podcastHosts[i]
        const hostPath = `${ac_strings.slug_host}/${hostPage.slug}`
        // const getHostImage = getPostImage(hostPage.slug)
        // get image and slug
        // const result = await graphql(getHostImage)
        allHostsSlug.push(hostPath)
  
        createPage({
          path: hostPath,
          component: path.resolve(`src/templates/page/podcast-host.tsx`),
          context:{
            title:hostPage.title,
            id:hostPage.id,
            breadcrumb:[]

          },
        })
      }

      createPage({
        path: ac_strings.slug_podcast_intro,
        component: path.resolve(`src/templates/page/podcast-intro.tsx`),
        context:{
          title:podcast.title,
          postId:process.env.POCAST_INTRO_POST_ID,
          breadcrumb:[
            {
              name:podcast.title,
              to:podcast.slug
            }
          ],
          hosts:allHostsSlug

        },
      })

      createPage({
        path: podcast.slug,
        component: path.resolve(`src/templates/page/podcast.tsx`),
        context:{
          title:podcast.title,
          id:process.env.PODCAST_FILTER_ID,
          breadcrumb:[
            {
              name:podcast.title,
              to:podcast.slug
            }
          ],
          hosts:allHostsSlug

        },
      })

    }
  })

  

}
