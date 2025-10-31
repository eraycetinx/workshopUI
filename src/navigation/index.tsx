import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Main/Home';

const Stack = createStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Index;
