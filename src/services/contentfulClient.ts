import { createClient, ContentfulClientApi } from 'contentful';

// Validate required environment variables
const spaceId = (import.meta as ImportMeta).env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = (import.meta as ImportMeta).env
  .VITE_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error('Missing Contentful Space ID or Access Token in .env');
}

// Create the Contentful client with proper typing
/* eslint-disable @typescript-eslint/no-explicit-any */
const client: ContentfulClientApi<any> = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export default client;
