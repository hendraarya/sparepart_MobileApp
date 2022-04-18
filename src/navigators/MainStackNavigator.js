import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainMenu} from '../pages/MainMenu';
import {Stockpartin} from '../pages/Stockpartin';

const MainStack = createNativeStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'MainMenu'}
        component={MainMenu}
        screenOptions={{headerShown: false}}
        // options={{
        //   title: 'MainMenu',
        // }}
      />
      {/* <MainStack.Screen
        name={'Stockpartin'}
        component={Stockpartin}
        // options={{
        //   title: 'MainMenu',
        // }}
      /> */}
    </MainStack.Navigator>
  );
}
