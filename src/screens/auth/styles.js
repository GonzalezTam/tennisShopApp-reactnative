import { StyleSheet } from 'react-native';

import COLORS from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    minHeight: 320,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    marginVertical: 5,
  },
  promptButton: {
    width: '100%',
    backgroundColor: COLORS.backgroundSecondary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prompt: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  promptMessage: {
    fontSize: 14,
    color: COLORS.gray,
    fontFamily: 'Lato-Regular',
  },
});
