//React imports
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
//Type imports
import { ResultsDataType } from '@customTypes/apiResults.type';
import ItemInformationsModal from '@components/ItemInformationsModal';
import { PATHS } from '@contents/api';

interface ResultsItemProps {
  result: ResultsDataType;
  index: number;
  path: PATHS;
}

/**
 * Component which will display each item information within a list
 *
 * @param {ResultsDataType} result received data where will be picked informations to display
 * @param {number} index position of the item in its array
 */
const ResultItem: React.FC<ResultsItemProps> = React.memo(
  ({ result, index, path }) => {
    const [itemName, setItemName] = useState<string>(result.name);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    //Break the word when necessary so it fit in the cards
    useEffect(() => {
      const formatted = insertLineBreaks(result.name, 45);
      setItemName(formatted);
    }, [result.name]);

    /**
     * Function to add a break line for long text to avoid overflowing word
     *
     * @param {string} str string to parse and add break if necessary
     * @param {number} maxLength max length of a string before being parsed
     * @returns the string with the line break if longer than the maxLength
     */
    function insertLineBreaks(str: string, maxLength: number): string {
      if (str.length <= maxLength) {
        return str;
      }

      let breakIndex = maxLength;
      // Second parameter of lastIndexOf is to set a limit
      // So, if maxLength is equal to 30, it will return the last occurence of search item before index 30
      const spaceIndex = str.lastIndexOf(' ', maxLength);

      if (spaceIndex !== -1) {
        breakIndex = spaceIndex;
      }

      return (
        str.slice(0, breakIndex) +
        '\n' +
        insertLineBreaks(str.slice(breakIndex + 1), maxLength)
      );
    }

    return (
      <View>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <View style={[styles.itemCard, index % 2 ? styles.bgColor : null]}>
            <Image style={styles.itemImage} source={{ uri: result.icon }} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.itemText}>{itemName}</Text>
              <Text style={styles.itemText}>{result.owned}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <ItemInformationsModal
          item={result}
          visible={isVisible}
          setVisible={setIsVisible}
          path={path}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  itemCard: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'darkgrey',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 2,
  },
  itemImage: {
    height: 40,
    width: 40,
    marginVertical: 5,
    marginLeft: 5,
    marginRight: 10,
  },
  bgColor: {
    backgroundColor: 'grey',
  },
  itemText: {
    flex: 1,
    flexWrap: 'wrap',
    color: 'white',
  },
});

export default ResultItem;
