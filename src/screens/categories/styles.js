import { StyleSheet } from 'react-native';

import COLORS from '../../constants/themes/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerList: {
    flex: 1,
    backgroundColor: COLORS.backgroundDark,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});
