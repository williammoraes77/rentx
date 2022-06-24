import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/Home';

import {CarDetails} from '../screens/CarDetails';
import {Scheduling} from '../screens/Scheduling';
import {SchedulingDetails} from '../screens/SchedulingDetails';
import {Confirmation} from '../screens/Confirmation';
import {MyCars} from '../screens/MyCars';
import {Splash} from '../screens/Splash';
import {SignIn} from '../screens/SignIn';

import {RootStackParamList} from '../utils/RootStackParams';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export function AppStackRoutes() {
  return (
    <Navigator initialRouteName="Home">
      {/* <Screen name="Splash" component={Splash} options={{headerShown: false}} /> */}
      <Screen name="SignIn" component={SignIn} options={{headerShown: false}} />

      <Screen name="Home" component={Home} />

      <Screen
        name="CarDetails"
        component={CarDetails}
        options={{headerShown: false}}
      />
      <Screen
        name="Scheduling"
        component={Scheduling}
        options={{headerShown: false}}
      />
      <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
        options={{headerShown: false}}
      />
      <Screen
        name="Confirmation"
        component={Confirmation}
        options={{headerShown: false}}
      />

      <Screen name="MyCars" component={MyCars} options={{headerShown: false}} />
    </Navigator>
  );
}
