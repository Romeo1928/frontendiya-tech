// что лучше type или interface
// export type ResponseType<T> = {
//   total_count: number;
//   incomplete_results: boolean;
//   items: T[];
// };

export type ResponseType = {
  total_count: number;
  incomplete_results: boolean;
  items: UserType[];
};

export type UserType = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
};

export type GetUsersQueryParams = {
  q: string;
  page: number;
  perPage: number;
  sort?: string;
  order?: string;
};
