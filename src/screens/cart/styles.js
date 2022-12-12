import { StyleSheet } from 'react-native';

import COLORS from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: COLORS.secondaryDark,
    justifyContent: 'space-around',
    paddingHorizontal: 50,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'end',
    paddingVertical: 5,
  },
  totalText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
  totalPrice: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#000',
  },
  confirmButton: {
    marginHorizontal: 20,
    backgroundColor: COLORS.gray,
    borderRadius: 3,
    padding: 5,
  },
  confirmButtonText: {
    fontFamily: 'Lato-Regular',
    color: '#fff',
    fontSize: 14,
  },
});
