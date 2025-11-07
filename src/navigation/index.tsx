import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AsyncStore from '@react-native-async-storage/async-storage';

import { useSelector, useDispatch } from 'react-redux';
import { setTheme, type State } from '../redux/slices';

// Navigations
import Auth from './auth';
import Main from './main';
import { StatusBar } from 'react-native';
const Stack = createStackNavigator();

const Index = () => {
  const loggedUser = useSelector<State>(state => state.loggedUser);
  const isLogined = !!loggedUser;
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      const currentTheme = await AsyncStore.getItem('Theme');
      if (currentTheme) {
        dispatch(setTheme(currentTheme));
      }
    })();
  }, [dispatch]);

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#041e33',
    },
  };

  return (
    <NavigationContainer theme={Theme}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#041e33'} />
      <Stack.Navigator
        initialRouteName={!isLogined ? 'Main' : 'Auth'}
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        {isLogined && <Stack.Screen name="Auth" component={Auth} />}
        {!isLogined && <Stack.Screen name="Main" component={Main} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
