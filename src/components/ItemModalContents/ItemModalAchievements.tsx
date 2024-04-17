//React import
import React from 'react';
import { View, Text, Image } from 'react-native';
//Type import
import { Achievements } from '@customTypes/apiResults.type';
//Style import
import { default_style } from '@styles/default';

interface ItemModalAchievementsProps {
  achievement: Achievements;
}

const ItemModalAchievements: React.FC<ItemModalAchievementsProps> = React.memo(
  ({ achievement }) => {
    return (
      <View style={default_style.default_wrap}>
        <View style={default_style.default_modal_head}>
          <Image
            style={default_style.default_modal_item_image}
            source={{ uri: achievement.icon }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text style={default_style.default_modal_text}>
              {achievement.name}
            </Text>
            <Text style={default_style.default_modal_text}>
              {achievement.owned}
            </Text>
          </View>
        </View>
      </View>
    );
  }
);

export default ItemModalAchievements;
