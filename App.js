import 'react-native-gesture-handler'
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux'
import HomeScreen from './src/screens/HomeScreen';
import { store } from './src/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MapScreen from './src/screens/MapScreen';

export default function App() {

  const stack = createStackNavigator();
  return (
    <Provider store={store} >
      <NavigationContainer>
        {/* <SafeAreaView style={styles.container}> */}
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >
            <stack.Navigator >
              <stack.Screen
                component={HomeScreen}
                name="HomeScreen"
                options={{
                  headerShown: false,
                }} />
              <stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
            </stack.Navigator>
          </KeyboardAvoidingView>
          {/* <HomeScreen /> */}
        </SafeAreaProvider>
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </Provider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ccc"
  }
})
