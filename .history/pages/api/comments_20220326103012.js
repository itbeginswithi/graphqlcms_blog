// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// var submitComment = require('../../services')
import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_AUTH_TOKEN}`
    }
  })

  const query = gql `
  mutation CreateComment()`
}