import {request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => { 
    const query = gql`
        query MyQuery {
            postsConnection {
            edges {
                node {
                author {
                    bio
                    name
                    id
                    photo {
                    url
                    }
                }
                createdAt
                slug
                title
                excerpt
                featuredimage {
                    url
                }
                categories {
                    name
                    slug
                }
                }
            }
            }
        }      
    `

   
}

export const getRecentPosts = async () => { 
    const query = gql `
        query GetPostDetails(){
            posts(
                orderBy: createdAt_ASC
                last: 3
            ) { 
                title
                featuredImage: { url }
                createdAt
                slug
            }
        }
    `
}