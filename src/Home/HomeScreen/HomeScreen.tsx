import React from 'react';
import {gql, useQuery} from '@apollo/client';

import {Box, Text} from '../../constants/theme';
import {ActivityIndicator, FlatList} from 'react-native';
import LoadingScreen from '../../screens/LoadingScreen';

const CHAPTERS_QUERY = gql`
  query Chapters {
    chapters {
      id
      number
      title
    }
  }
`;

const HomeScreen = () => {
  const {data, loading, error} = useQuery(CHAPTERS_QUERY);
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="mainBackground">
      <Text>Home Screen</Text>
      {loading && <ActivityIndicator />}

      {error && <Text>{error.message}</Text>}
    </Box>
  );
};

export default HomeScreen;
