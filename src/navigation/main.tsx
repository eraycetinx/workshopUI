import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Home from '../screens/Main/Home/Home';
import BottomBar from '../components/bar/bottombar/BottomBar';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomBar {...props} />}
    >
      <Tab.Screen name="Anasayfa" component={Home} />
      <Tab.Screen name="Randevu" component={Home} />
      <Tab.Screen name="Raporlar" component={Home} />
      <Tab.Screen name="Favoriler" component={Home} />
      <Tab.Screen name="Hesap" component={Home} />
    </Tab.Navigator>
  );
};

export default Main;
