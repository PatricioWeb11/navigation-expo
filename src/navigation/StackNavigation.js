import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from '../components/HomeScreen';
import { PantallaUno } from '../components/PantallaUno';
import { PantallaTres } from '../components/PantallaTres';
import { PantallaDos } from '../components/PantallaDos';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="PantallaUno" component={PantallaUno} />
                <Stack.Screen name="PantallaDos" component={PantallaDos} />
                <Stack.Screen name="PantallaTres" component={PantallaTres} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;