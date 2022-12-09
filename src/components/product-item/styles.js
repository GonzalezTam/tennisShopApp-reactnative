import { StyleSheet } from 'react-native';

import COLORS from '../../constants/themes/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    marginVertical: 0,
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: 5,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: COLORS.darkGray,
    marginTop: 5,
    marginBottom: 5,
  },
});
