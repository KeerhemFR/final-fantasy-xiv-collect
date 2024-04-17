//React imports
import React from 'react';
import { Button, SafeAreaView } from 'react-native';
//Contents import
import { listsNavigationFR } from '@contents/listsNavigation';
//Style import
import { default_style } from '@styles/default';

interface StartScreenProps {
  navigation: any;
}

/**
 * Homepage of the application, displaying the different options to the user for them to
 * search the wanted data
 *
 * @param {any} navigation react-navigation property used to navigate between the different pages
 */
const StartScreen: React.FC<StartScreenProps> = React.memo(({ navigation }) => {
  return (
    <SafeAreaView style={default_style.default_view}>
      {listsNavigationFR.map((navi, index) => (
        <Button
          key={index}
          title={navi.title}
          onPress={() =>
            navigation.navigate('Lists', { path: navi.path, title: navi.title })
          }
        />
      ))}
    </SafeAreaView>
  );
});

export default StartScreen;
