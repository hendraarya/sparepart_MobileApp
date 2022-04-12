import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStackNavigator from './navigators/AuthStackNavigator';
import {MainStackNavigator} from './navigators/MainStackNavigator';

import {useAuth} from './hooks/useAuth';
import {AuthContext} from './contexts/AuthContext';
import {UserContext} from './contexts/UserContext';
import {SplashScreen} from './pages/SplashScreen';
import {lightTheme} from './themes/light';

const RootStack = createNativeStackNavigator();

export default function App() {
  const {auth, state} = useAuth();

  function renderScreens() {
    if (state.loading) {
      return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    }
    return state.user ? (
      <RootStack.Screen name={'MainStack'}>
        {() => (
          <UserContext.Provider value={state.user}>
            <MainStackNavigator />
          </UserContext.Provider>
        )}
      </RootStack.Screen>
    ) : (
      <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
    );
  }

  return (
    <AuthContext.Provider value={{auth, user: state.user}}>
      <NavigationContainer theme={lightTheme}>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          {/* Yang dijalankan pertama kali, pada saat apps running */}
          {renderScreens()}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
