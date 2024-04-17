// @ts-nocheck
//To verify later: error in routing

//React imports
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
//Navigation imports
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens imports
import StartScreen from '@screens/StartScreen';
import ListsScreen from '@screens/ListsScreen';

//Content import
import * as ScreenText from '@contents/screens.json';
import { PATHS } from '@contents/api';

const screens = [
  {
    screen: StartScreen,
    name: ScreenText.start.name,
    option: ScreenText.start.option,
    param: undefined,
  },
  {
    screen: ListsScreen,
    name: ScreenText.lists.name,
    option: ScreenText.lists.option,
    param: { path: PATHS },
  },
];

const Stack = createNativeStackNavigator();

/**
 * Change applied globaly to the app
 */
const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#312C2C',
    text: 'white',
  },
};

/**
 * react-navigation and react-navigation-stack now deprecated
 * routing made with @react-navigation/native and @react-navigation/native-stack
 *
 * initial route must be settled in the navigator tag and have the same
 * as one of the settled route
 *
 * in the screen tag must be settled name and the associated component
 * to modify how the header of the said page is rendered, many options can be set
 */
const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator initialRouteName="Start">
        {screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            initialParams={screen.param}
            component={screen.screen}
            options={{
              title: screen.option,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              headerStyle: {
                backgroundColor: '#312C2C',
              },
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
