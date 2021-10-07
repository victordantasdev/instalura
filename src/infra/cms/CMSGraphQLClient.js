import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;

export function CMSGraphQLClient({ preview, datoCMSToken } = { preview: false }) {
  const DatoCMSURL = preview
    ? 'https://graphql.datocms.com/'
    : 'https://graphql.datocms.com/preview';
  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${datoCMSToken}`,
    },
  });

  return {
    async query({ query, variables }) {
      const messages = await client.request(query, variables);
      return {
        data: {
          messages,
        },
      };
    },
  };
}
