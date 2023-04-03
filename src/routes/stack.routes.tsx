import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../screens/Welcome';
import { UserIdentification } from './../screens/UserIdentification';
import { Confirmation } from '../screens/Confirmation';
import { PlantSelect } from '../screens/PlantSelect';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        }
      }}
    >

    <stackRoutes.Screen name="Welcome" component={Welcome} />
  
    <stackRoutes.Screen name="UserIdentification" component={UserIdentification} /> 
  
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />

    <stackRoutes.Screen name="PlantSelect" component={PlantSelect} />    

    </stackRoutes.Navigator>
  )
  
  export default AppRoutes;