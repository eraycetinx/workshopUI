import { SafeAreaView } from 'react-native-safe-area-context';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

import Navigation from './src/navigation';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
