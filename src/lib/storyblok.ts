import { GraphQLClient, request, gql } from "graphql-request";

const endpoint = "https://gapi.storyblok.com/v1/api";

export const fetchStoryblokData = async <T>(
  query: string,
  variables = {}
): Promise<T> => {
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN}`,
  };
  return request<T>(endpoint, query, variables, headers);
};
