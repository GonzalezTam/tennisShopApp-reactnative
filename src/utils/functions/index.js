import { Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const sumTotal = (items) =>
  items
    ?.map((item) => item.price * item.quantity)
    ?.reduce((a, b) => a + b, 0)
    .toFixed(2);
