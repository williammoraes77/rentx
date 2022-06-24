import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Confirmation} from '../screens/Confirmation';
import {Splash} from '../screens/Splash';
import {SignIn} from '../screens/SignIn';
import {SignUpFirstStep} from '../screens/SignUp/SignUpFirstStep';
import {SignUpSecondStep} from '../screens/SignUp/SignUpSecondStep';

import {RootStackParamList} from '../utils/RootStackParams';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="Splash ">
      <Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
      <Screen
        name="SignUpFirstStep"
        component={SignUpFirstStep}
        options={{headerShown: false}}
      />
      <Screen
        name="SignUpSecondStep"
        component={SignUpSecondStep}
        options={{headerShown: false}}
      />
      <Screen
        name="Confirmation"
        component={Confirmation}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}
