import { StyleSheet } from 'react-native';

import COLORS from '../../constants/themes/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray,
  },
  productCard: {
    width: '80%',
    height: 500,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 30,
    marginTop: -10,
    marginBottom: 30,
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginTop: 10,
  },
  price: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primaryDark,
  },
  description: {
    marginTop: 20,
    fontSize: 14,
    color: COLORS.darkgray,
    marginBottom: 20,
  },
});
