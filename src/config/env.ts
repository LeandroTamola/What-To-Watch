import {TMDB_API_KEY, TMDB_BASE_URL} from '@env';

const devEnvironmentVariables = {
  TMDB_API_KEY,
  TMDB_BASE_URL,
};
const prodEnvironmentVariables = {
  TMDB_API_KEY,
  TMDB_BASE_URL,
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
