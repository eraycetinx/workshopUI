import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStore from '@react-native-async-storage/async-storage';

import { useSelector, useDispatch } from 'react-redux';
import { setTheme, type State } from '../redux/slices';

// Navigations
import Auth from './auth';
import HomeScreen from '../screens/Main/Home';

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

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLogined ? 'Home' : 'Auth'}
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        {!isLogined && <Stack.Screen name="Auth" component={Auth} />}
        {isLogined && <Stack.Screen name="Home" component={HomeScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
