import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Appearance} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {createStackNavigator} from '@react-navigation/stack';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import theme, {darkTheme} from './src/constants/theme';
import AuthenticationStack from './src/Authentication';
import HomeStack from './src/Home';
import {AppStackType} from './src/types/NavigationTypes';

const isDarkMode = Appearance.getColorScheme() === 'dark';
const AppStack = createStackNavigator<AppStackType>();

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api.graphql.guide/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const [darkMode] = useState<Boolean>(isDarkMode);
  // const handleSwitch = () => {
  //   setDarkMode(prev => !darkMode);
  // };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <AppStack.Navigator>
            {/* <AppStack.Screen
            name="Authentication"
            component={AuthenticationStack}
            options={{headerShown: false}}
          /> */}
            <AppStack.Screen
              name="Home"
              options={{headerShown: false}}
              component={HomeStack}
            />
          </AppStack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
