import { GraphQLClient } from 'graphql-request';

export function request({ query, variables }) {
  const headers = { authorization: 'Bearer 563bd3e40935d7579000788930e66c' };
  const endpoint = process.env.OLCZANSKI_DATO_PREVIEW
    ? 'https://graphql.datocms.com/preview'
    : 'https://graphql.datocms.com/';
  const client = new GraphQLClient(endpoint, { headers });
  return client.request(query, variables);
}
