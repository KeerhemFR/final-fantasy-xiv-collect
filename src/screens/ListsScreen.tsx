//React imports
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
//Components imports
import ResultsList from '@components/ResultsList';
import SearchBar from '@components/SearchBar';
//Content imports
import { PATHS } from '@contents/api';
import { NAVIGATION_TITLES } from '@contents/listsNavigation';
import { achievementsFilterFR, spellsFilterFR } from '@contents/filters';
//Custom hooks imports
import useResults from '@hooks/useResults';
//Styles imports
import { default_style } from '@styles/default';

type ListsScreenProps = {
  route: ListsScreenRouteProp;
  navigation: any;
};

type RootStackParamList = {
  ListsScreen: { path: PATHS; title: string };
};

type ListsScreenRouteProp = RouteProp<RootStackParamList, 'ListsScreen'>;

/**
 * Screen related to the achievements data to display
 *
 * @param route holds props passed by the parents
 * @param navigation props to use navigation method to display corresponding title in the header
 * @return component allowing to display the list of the wanted items
 * and to filter with different categories and the user input
 */
const ListsScreen: React.FC<ListsScreenProps> = React.memo(
  ({ route, navigation }) => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [types, setTypes] = useState<{ id: number; name: string }[]>([]);
    const [filter, setFilter] = useState<number>(0);
    const { path, title } = route?.params;
    const { searchApi, results } = useResults(path);

    //Change the title of the navigation header
    useEffect(() => {
      navigation.setOptions({ title: title });
    }, []);

    //Set a filter for the dropdown depending the loaded data
    useEffect(() => {
      if (path === PATHS.ACHIEVEMENTS) {
        setTypes(achievementsFilterFR);
      }

      if (path === PATHS.SPELLS) {
        setTypes(spellsFilterFR);
      }
    }, [results]);

    /**
     * Filter the received results to match user search
     *
     * @param {string} userInput user entered input corresponding what they want to search
     * @param {number} category id of the category used to filter the results
     * @returns a list and necessary elements to search through the list
     */
    const filteredResults = (userInput: string, category?: number) => {
      return results?.filter((result) => {
        if (category && category !== 0) {
          return (
            result.name.toLowerCase().includes(userInput) &&
            'type' in result &&
            'id' in result.type &&
            result.type.id === category
          );
        }

        return result.name.toLowerCase().includes(userInput);
      });
    };

    //Display the dropdown to filter the category if there is such category
    const displayDropdown = () => {
      if (types.length) {
        return (
          <SelectDropdown
            data={types}
            defaultValue={types[0]}
            onSelect={(selectedItem) => {
              setFilter(selectedItem.id);
            }}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem.name;
            }}
            rowTextForSelection={(item) => {
              return item.name;
            }}
            buttonStyle={default_style.default_dropdown}
            buttonTextStyle={default_style.default_dropdown_text}
          />
        );
      }
    };

    return (
      <SafeAreaView style={default_style.default_view}>
        {displayDropdown()}
        <SearchBar
          searchInput={searchInput}
          searchInputChange={(newSearchItem) => setSearchInput(newSearchItem)}
          searchOption={() => searchApi}
        />
        <ResultsList
          results={filteredResults(searchInput, filter)}
          path={path}
        />
      </SafeAreaView>
    );
  }
);

export default ListsScreen;
