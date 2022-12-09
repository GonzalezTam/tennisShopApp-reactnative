import { StyleSheet } from 'react-native';

import COLORS from '../../constants/themes/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});
