import { StyleSheet, StatusBar } from 'react-native';

import COLORS from '../../constants/themes/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 160,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: StatusBar.currentHeight || 10,
  },
  categoryContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: COLORS.primaryLight,
  },
  categoryItemText: {
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    textTransform: 'uppercase',
    color: COLORS.primaryDark,
  },
});
