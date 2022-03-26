import {request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_

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

    const results = await request(graphqlAPI, query);
}