import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegistrationUser from '../pages/RegistrationUser';
import LoginUser from '../pages/LoginUser';
import Stockpartin from '../pages/Stockpartin';

const AuthStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      mode={'modal'}
      // initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      {/* <AuthStack.Screen name={'SplashName'} component={SplashScreen} /> */}
      <AuthStack.Screen name={'LoginStack'}>
        {() => (
          <LoginStack.Navigator
            mode={'card'}
            initialRouteName="SplashScreen"
            screenOptions={{headerShown: false}}>
            {/* <LoginStack.Screen name={'Screen'} component={SplashScreen} /> */}
            <LoginStack.Screen name={'Login'} component={LoginUser} />
          </LoginStack.Navigator>
        )}
      </AuthStack.Screen>
      <AuthStack.Screen
        name={'RegistrationUser'}
        component={RegistrationUser}
      />
      <AuthStack.Screen name={'Stockpartin'} component={Stockpartin} />
    </AuthStack.Navigator>
  );
}
export default AuthStackNavigator;
