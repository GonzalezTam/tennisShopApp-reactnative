import { StyleSheet } from 'react-native';

import COLORS from '../../constants/themes/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundDark,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.backgroundDark,
    paddingVertical: 25,
    paddingHorizontal: 25,
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
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 35,
    marginLeft: 15,
    marginBottom: 5,
  },
  header: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    color: COLORS.text,
    marginBottom: 5,
    marginLeft: -20,
  },
  contentContainer: {
    backgroundColor: COLORS.backgroundDark,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  quantity: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: COLORS.text,
    backgroundColor: COLORS.backgroundDarkest,
    paddingLeft: 10,
    borderRadius: 5,
    marginLeft: -10,
  },
  price: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: COLORS.text,
    backgroundColor: COLORS.backgroundDarkest,
    paddingRight: 10,
    borderRadius: 5,
  },
});
