import React from 'react';
import { Button, View, Text } from 'react-native';

export function PantallaDos({ navigation, route }) {

  const { id, nombre } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla Dos</Text>
      <Text>Parametros: </Text>
      <Text>{JSON.stringify(id)}</Text>
      <Text>{JSON.stringify(nombre)}</Text>
      <Button
        title="Ir a la pantalla Tres"
        onPress={() => navigation.navigate('PantallaTres')}
      />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}