//React imports
import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
//Components imports
import ItemModalAchievements from '@components/ItemModalContents/ItemModalAchievements';
import ItemModalArmoires from '@components/ItemModalContents/ItemModalArmoires';
import ItemModalBardings from '@components/ItemModalContents/ItemModalBardings';
import ItemModalEmotes from '@components/ItemModalContents/ItemModalEmotes';
import ItemModalFashions from '@components/ItemModalContents/ItemModalFashions';
import ItemModalFrames from '@components/ItemModalContents/ItemModalFrames';
import ItemModalHairstyles from '@components/ItemModalContents/ItemModalHairstyles';
import ItemModalMinions from '@components/ItemModalContents/ItemModalMinions';
import ItemModalMounts from '@components/ItemModalContents/ItemModalMounts';
import ItemModalOrchestrions from '@components/ItemModalContents/ItemModalOrchestrions';
import ItemModalRecords from '@components/ItemModalContents/ItemModalRecords';
import ItemModalRelics from '@components/ItemModalContents/ItemModalRelics';
import ItemModalSpells from '@components/ItemModalContents/ItemModalSpells';
import ItemModalSurveyRecords from '@components/ItemModalContents/ItemModalSurveyRecords';
import ItemModalTitles from '@components/ItemModalContents/ItemModalTitles';
//Style import
import { default_style } from '@styles/default';
//Type import
import { ResultsDataType } from '@customTypes/apiResults.type';
import * as verification from '@customTypes/typeVerification.utils';
//Content import
import { PATHS } from '@contents/api';

interface ItemInformationsModalProps {
  item: ResultsDataType;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  path: PATHS;
}

const ItemInformationsModal: React.FC<ItemInformationsModalProps> = React.memo(
  ({ item, visible, setVisible, path }) => {
    const modalContent = () => {
      switch (path) {
        case PATHS.ACHIEVEMENTS:
          if (verification.isAchievements(item)) {
            return <ItemModalAchievements achievement={item} />;
          }

        case PATHS.ARMOIRES:
          if (verification.isArmoires(item)) {
            return <ItemModalArmoires armoire={item} />;
          }

        case PATHS.BARDINGS:
          if (verification.isBardings(item)) {
            return <ItemModalBardings />;
          }

        case PATHS.EMOTES:
          if (verification.isEmotes(item)) {
            return <ItemModalEmotes />;
          }

        case PATHS.FASHIONS:
          if (verification.isFashions(item)) {
            return <ItemModalFashions />;
          }

        case PATHS.FRAMES:
          if (verification.isFrames(item)) {
            return <ItemModalFrames />;
          }

        case PATHS.HAIRSTYLES:
          if (verification.isHairstyles(item)) {
            return <ItemModalHairstyles />;
          }

        case PATHS.MINIONS:
          if (verification.isMinions(item)) {
            return <ItemModalMinions />;
          }

        case PATHS.MOUNTS:
          if (verification.isMounts(item)) {
            return <ItemModalMounts />;
          }

        case PATHS.ORCHESTRIONS:
          if (verification.isOrchestrions(item)) {
            return <ItemModalOrchestrions />;
          }

        case PATHS.RECORDS:
          if (verification.isRecords(item)) {
            return <ItemModalRecords />;
          }

        case PATHS.RELICS:
          if (verification.isRelics(item)) {
            return <ItemModalRelics />;
          }

        case PATHS.SPELLS:
          if (verification.isSpells(item)) {
            return <ItemModalSpells />;
          }

        case PATHS.SURVEY_RECORDS:
          if (verification.isSurveyRecords(item)) {
            return <ItemModalSurveyRecords />;
          }

        case PATHS.TITLES:
          if (verification.isTitles(item)) {
            return <ItemModalTitles />;
          }
      }
    };

    return (
      <Modal animationType="slide" visible={visible} transparent={true}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <View style={default_style.default_modal}>
            <View style={default_style.default_itemcard_modal}>
              {modalContent()}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
);

export default ItemInformationsModal;
