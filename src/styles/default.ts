import { StyleSheet } from 'react-native';

export const default_style = StyleSheet.create({
  default_view: {
    margin: 5,
    flex: 1,
  },
  default_text: {
    color: 'white',
  },
  default_wrap: {
    flex: 1,
    flexWrap: 'wrap',
  },
  default_square_button: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    alignSelf: 'flex-end',
    backgroundColor: '#FFFFFF66',
    marginTop: 5,
  },
  default_square_button_text: {
    fontSize: 18,
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  default_input_container: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  default_input: {
    marginLeft: 10,
    color: 'white',
  },
  default_dropdown: {
    width: '50%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    alignSelf: 'flex-end',
    backgroundColor: '#FFFFFF66',
    marginVertical: 5,
  },
  default_dropdown_text: {
    color: 'white',
  },
  default_modal: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000000A0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  default_itemcard_modal: {
    height: '90%',
    width: '90%',
    backgroundColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    paddingTop: 5,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  default_modal_head: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  default_modal_item_image: {
    height: 60,
    width: 60,
    marginVertical: 5,
    marginRight: 10,
  },
  default_modal_text: {
    color: 'white',
    fontSize: 18,
  },
});
