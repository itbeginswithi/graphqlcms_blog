// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function submitComment(req, res) {

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_AUTH_TOKEN}`
    }
  })

  const query = gql `
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!){
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}})
    }
  `

  try{
    const result = await graphQLClient.request(query, JSON.parse(req.body))
    return res.status(200).send(result);
  }catch(error){
    console.log(error)
    return res.status(500).send(error);
  }
}