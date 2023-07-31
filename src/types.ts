export type ThemeType = {
  colors: { [key: string]: string | string[] },
  fonts: {
    title?: { [key: string]: string | string[] },
    subtitle?: { [key: string]: string | string[] },
    medium?: { [key: string]: string | string[] },
    small?: { [key: string]: string | string[] },
  },
};

export type OptionType = {
  value: QueryType['sort'] | QueryType['order'];
  label: string;
};

export type ChangeOptionType = (item: any, param: keyof QueryType) => void;

export type QueryType = {
  q: string,
  sort: 'followers' | 'repositories' | 'joined',
  order: 'desc' | 'asc',
  per_page: number,
  page: number
}

export type ResponseType = {
  total_count: number,
  incomplete_results?: boolean,
  items: CardsType[]
}

export type CardsType = {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  score: number
}

export type UiType = {
  currentId: number | null,
  loading: boolean,
  query: string,
  option: string,
  popup: boolean,
  popupTitle: string,
  popupSubtitle: string,
  popupContent: string | null,
  currentUser: User | null,
}

export type User = {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  name: string,
  company: null | string,
  blog: string,
  location: null | string,
  email: null | string,
  hireable: null | string,
  bio: string,
  twitter_username: null | string,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: string,
  updated_at: string
}
