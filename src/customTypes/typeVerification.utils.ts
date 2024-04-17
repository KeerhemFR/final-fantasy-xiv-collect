import * as customTypes from '@customTypes/apiResults.type';

/**
 * Verify if passed data is of type Achievements
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isAchievements(
  data: customTypes.ResultsDataType
): data is customTypes.Achievements {
  return (data as customTypes.Achievements).name !== undefined;
}

/**
 * Verify if passed data is of type Armoire
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isArmoires(
  data: customTypes.ResultsDataType
): data is customTypes.Armoires {
  return (data as customTypes.Armoires).name !== undefined;
}

/**
 * Verify if passed data is of type Bardings
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isBardings(
  data: customTypes.ResultsDataType
): data is customTypes.Bardings {
  return (data as customTypes.Bardings).name !== undefined;
}

/**
 * Verify if passed data is of type Emotes
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isEmotes(
  data: customTypes.ResultsDataType
): data is customTypes.Emotes {
  return (data as customTypes.Emotes).name !== undefined;
}

/**
 * Verify if passed data is of type Fashions
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isFashions(
  data: customTypes.ResultsDataType
): data is customTypes.Fashions {
  return (data as customTypes.Fashions).name !== undefined;
}

/**
 * Verify if passed data is of type Frames
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isFrames(
  data: customTypes.ResultsDataType
): data is customTypes.Frames {
  return (data as customTypes.Frames).name !== undefined;
}

/**
 * Verify if passed data is of type Hairstyles
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isHairstyles(
  data: customTypes.ResultsDataType
): data is customTypes.Hairstyles {
  return (data as customTypes.Hairstyles).name !== undefined;
}

/**
 * Verify if passed data is of type Minions
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isMinions(
  data: customTypes.ResultsDataType
): data is customTypes.Minions {
  return (data as customTypes.Minions).name !== undefined;
}

/**
 * Verify if passed data is of type Mounts
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isMounts(
  data: customTypes.ResultsDataType
): data is customTypes.Mounts {
  return (data as customTypes.Mounts).name !== undefined;
}

/**
 * Verify if passed data is of type Orchestrions
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isOrchestrions(
  data: customTypes.ResultsDataType
): data is customTypes.Orchestrions {
  return (data as customTypes.Orchestrions).name !== undefined;
}

/**
 * Verify if passed data is of type Records
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isRecords(
  data: customTypes.ResultsDataType
): data is customTypes.Records {
  return (data as customTypes.Records).name !== undefined;
}

/**
 * Verify if passed data is of type Relics
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isRelics(
  data: customTypes.ResultsDataType
): data is customTypes.Relics {
  return (data as customTypes.Relics).name !== undefined;
}

/**
 * Verify if passed data is of type Spells
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isSpells(
  data: customTypes.ResultsDataType
): data is customTypes.Spells {
  return (data as customTypes.Spells).name !== undefined;
}

/**
 * Verify if passed data is of type SurveyRecords
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isSurveyRecords(
  data: customTypes.ResultsDataType
): data is customTypes.SurveyRecords {
  return (data as customTypes.SurveyRecords).name !== undefined;
}

/**
 * Verify if passed data is of type Titles
 *
 * @param data data to verify the type
 * @returns the data as the wanted type beside of the general type
 */
export function isTitles(
  data: customTypes.ResultsDataType
): data is customTypes.Titles {
  return (data as customTypes.Titles).name !== undefined;
}
