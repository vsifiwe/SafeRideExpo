import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, BookingScreen } from './src/screens';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Booking" component={BookingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>  

  );
}
