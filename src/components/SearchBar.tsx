//React imports
import React from 'react';
import { TextInput, View } from 'react-native';
//Styles imports
import { default_style } from '@styles/default';
//Icons import
import { AntDesign } from '@expo/vector-icons';
//Contents import
import { PATHS } from '@contents/api';

interface SearchBarProps {
  searchInput: string;
  searchInputChange: React.Dispatch<React.SetStateAction<string>>;
  searchOption: () => (path: PATHS) => Promise<void>;
}

/**
 * Component for the user to search wanted items based on their entries
 *
 * @param searchInput input entered by the user for they search
 * @param searchInputChange handle the change of value of searchInput
 * @param searchOption browse the corresponding datas for the search
 */
const SearchBar: React.FC<SearchBarProps> = React.memo(
  ({ searchInput, searchInputChange, searchOption }) => {
    return (
      <View style={default_style.default_input_container}>
        <AntDesign name="search1" size={24} color="white" />
        <TextInput
          style={default_style.default_input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Saisissez votre recherche"
          placeholderTextColor={'lightgray'}
          value={searchInput}
          onChangeText={searchInputChange}
          onEndEditing={searchOption}
        />
      </View>
    );
  }
);

export default SearchBar;
