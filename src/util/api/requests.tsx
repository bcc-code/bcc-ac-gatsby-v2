
export const loginMutation = (username: string, password: string, remember: boolean) => {
  console.log(username)
  console.log(password)
  return `
  mutation {
      signIn(input:{
        username:"${username}"
        password:"${password}"
        remember:${remember}
      }){
        success
        user {
          name
          email
  
        }
      }
    }
  `
}

export const registerMutation = (email: string, password: string, remember: boolean) => `
    mutation {
      signUp(input:{
      email:"${email},
      password:"${password},
      remember:${remember}
    }) {
      success
      user {
        name
        email

      }
    }
 }

`

export const forgotPasswordMutation = (email: string) => `
  mutation {
    forgotPassword(input:{email:"${email}"}) {
      success
      message
    } 
  }

`


export const logoutMutation = `
  mutation {
    signOut {
      status
    }
  }
`

export const likePostMutation = (id: string, toggle: boolean) => `
  mutation {
    likePost(postId:${id}, toggle:${toggle}){
      success
      message
      count
    }
  }
`
export const followTopicMutation = (id: number, toggle: boolean) => `
  mutation {
    follow (type:TOPIC,id:${id},toggle:${toggle}){
      success
      message
    }
  }
`

export const followPlaylistMutation = (id: number, toggle: boolean) => `
  mutation {
    follow (type:PLAYLIST,id:${id},toggle:${toggle}){
      success
      message
    }
  }
`


export const readingPostMutation = (id: string) => `
  mutation {
    readingPost(postId:${id}){
      success
      timeRead
    }
  }

`

export const visitsPostMutation = (id: string) => `
  mutation {
    visitsPost(postId:${id}){
      success
    }
  }
`
export const biblePostsQuery = (bookId: number, ch: number) => `
query {
    biblePosts(id:"${bookId}", ch:${ch}){
      slug
    }
  }

`

export const recommendedByPostQuery = (postId: number | string) => `
  query { 
    
    recommendedByPost(postId:${postId}){
      slug
    }
  }  

`
export const topicReommendedPostsQuery = (topicId: number) => `
query {
  rankingTopicPosts(topicId:${topicId}){
    slug
  }
}  
`

export const likedPostsQuery = `
  query {
    liked {
      id
      slug
    }
  }
`
export const followingQuery = `
  query {
    following {
      topics {
        id
        slug
      }
      playlists {
        id
        slug
      }
      authors {
        id
        slug
      }
    }
}
`
export const latestHistoryQuery = `
  query {
    history(limit:10) {
      id
      slug
    }
  }
`

export const unfinishedQuery = `
  query {
    unfinishedPosts {
      id
      slug
    }
  }
`

export const profileQuery = `
  query {
    me {
      name
      email
      id
    }
  }
`