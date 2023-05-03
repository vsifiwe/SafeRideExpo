
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, BookingScreen, DriverScreen } from './src/screens';
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
          <Stack.Screen name="Driver" component={DriverScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>  

  );
}
