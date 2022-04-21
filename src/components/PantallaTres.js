import React from 'react';
import { Button, View, Text } from 'react-native';

export function PantallaTres({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla Tres</Text>
      <Button title="ir a homeScreen" onPress={() =>  navigation.navigate('HomeScreen')} />
    </View>
  );
}