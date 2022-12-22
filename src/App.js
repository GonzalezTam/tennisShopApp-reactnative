import { useFonts } from 'expo-font';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './navigation';
import store from './store';

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="red" size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
