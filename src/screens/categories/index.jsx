import React from 'react';
import { Text, View, Button } from 'react-native';

import colors from '../../constants/colors';
import { styles } from './styles';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.buttonContainer}>
        <Button
          color={colors.primary}
          title="Go to Products"
          onPress={() => navigation.navigate('Products')}
        />
      </View>
    </View>
  );
};

export default Categories;
