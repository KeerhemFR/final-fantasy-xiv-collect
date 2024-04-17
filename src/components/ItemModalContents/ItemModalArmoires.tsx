//React import
import React from 'react';
import { View, Text } from 'react-native';
//Type import
import { Armoires } from '@customTypes/apiResults.type';

interface ItemModalArmoiresProps {
  armoire: Armoires;
}

const ItemModalArmoires: React.FC<ItemModalArmoiresProps> = React.memo(
  ({ armoire }) => {
    return (
      <View>
        <Text>{armoire.name}</Text>
      </View>
    );
  }
);

export default ItemModalArmoires;
