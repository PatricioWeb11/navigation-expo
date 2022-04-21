import React from 'react';
import { Button, View, Text } from 'react-native';

export function PantallaUno({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla Uno</Text>
      <Button
        title="Ir a la pantalla Dos"
        onPress={() => navigation.navigate('PantallaDos', {
          id: 11,
          nombre: 'Patricio Fuenzalida'
        })}
      />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}