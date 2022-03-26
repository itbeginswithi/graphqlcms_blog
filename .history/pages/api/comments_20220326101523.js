// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// var submitComment = require('../../services')
import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function helloAPI(req, res) {
  res.status(200).json({name: 'John Doe'})
}