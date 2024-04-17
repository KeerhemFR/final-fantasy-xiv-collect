//React imports
import React, { RefObject, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
//Components import
import ResultItem from '@components/ResultItem';
//Type import
import { ResultsDataType } from '@customTypes/apiResults.type';
//Style import
import { default_style } from '@styles/default';
import { PATHS } from '@contents/api';

interface ResultsListProps {
  results?: ResultsDataType[] | null;
  path: PATHS;
}

/**
 * React component consisting in a list displaying every items via a components
 * The displayed elements will depends on what api path is called
 *
 * @param {ResultsDataType[] | null} results api call results to display
 * @returns {React.Component} a list what will display multiple iems
 */
const ResultsList: React.FC<ResultsListProps> = React.memo(
  ({ results, path }) => {
    const [showLoader, setShowLoader] = useState<boolean>(false);

    //Show a loader for maximum 5s if no data when landing on the page
    useEffect(() => {
      const timer = setTimeout(() => {
        if (!results || results.length === 0) {
          setShowLoader(true);
        }
      }, 5000);

      return () => clearTimeout(timer);
    }, [results]);

    //Reference to the FlatList so another function can target it
    const flatList: RefObject<FlatList<any>> = useRef<FlatList<any>>(null);

    //Tell the FlatList to scroll to it's top when the function is called
    const scrollToTop = () => {
      flatList?.current?.scrollToOffset({ animated: true, offset: 0 });
    };

    //Conditionnaly display the loader
    const displayLoader = () => {
      if (!showLoader && !results) {
        return (
          <ActivityIndicator size="large" color="white" style={styles.loader} />
        );
      }
    };

    //Conditionnaly display the back to top button
    const displayBackToTop = () => {
      if (results && results.length > 5) {
        return (
          <TouchableOpacity
            onPress={scrollToTop}
            style={default_style.default_square_button}
          >
            <Text style={default_style.default_square_button_text}>↑</Text>
          </TouchableOpacity>
        );
      }
    };

    return (
      <View style={[default_style.default_view]}>
        {displayLoader()}

        <FlatList
          ref={flatList}
          data={results}
          keyExtractor={(result) => result.id.toString()}
          renderItem={({ item, index }) => {
            return <ResultItem result={item} index={index} path={path} />;
          }}
          ListEmptyComponent={() => (
            <Text style={default_style.default_text}>
              Aucune valeur trouvée
            </Text>
          )}
        />

        {displayBackToTop()}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  loader: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ResultsList;
