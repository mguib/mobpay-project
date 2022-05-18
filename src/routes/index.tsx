import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../components/screens/Home';
import { Details } from '../components/screens/Details';


type StackParams = {
    Home: undefined;
    Details:{
        cidade: string;
        email: string;
        endereco: string;
        estado: string;
        id: string;
        idade: number;
        nome: string;
    }
}

const {Screen, Navigator} = createNativeStackNavigator<StackParams>();

export function Routes(){
    return(
        <NavigationContainer>
            <Navigator
            >
                <Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        headerShown: false,
                    }}
                />
                <Screen name="Details" component={Details}/>

            </Navigator>
            
        </NavigationContainer>
    )
}
