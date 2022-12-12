import { StyleSheet } from 'react-native';

import COLORS from '../../constants/themes/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.gray,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: COLORS.backgroundSecondary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  date: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    color: COLORS.text,
    padding: 3,
    marginRight: 20,
  },
  contentContainer: {
    backgroundColor: COLORS.gray,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: COLORS.text,
    paddingRight: 5,
    padding: 5,
  },
});
