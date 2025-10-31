import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './src/redux/store';
import { Provider } from 'react-redux';


import Navigation from './src/navigation';

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
