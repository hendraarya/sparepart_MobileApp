import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Navigators
import AuthStackNavigator from './navigators/AuthStackNavigator';
import {MainStackNavigator} from './navigators/MainStackNavigator';

//Pages
import {SplashScreen} from './pages/SplashScreen';

//Themes Application
import {lightTheme} from './themes/light';

//Parsing Data
import {useAuth} from './hooks/useAuth';
import {AuthContext} from './contexts/AuthContext';
import {UserContext} from './contexts/UserContext';

//Create function navigator
const RootStack = createNativeStackNavigator();

//Main function
export default function App() {
  const {auth, state} = useAuth(); //masuk ke fungsi useAuth, untuk mengambil state user udah login atau belum

  //fungsi untuk menampilkan page yang diinginkan
  function renderScreens() {
    if (state.loading) {
      return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    }
    return state.user ? (
      <RootStack.Screen name={'MainStack'}>
        {() => (
          <UserContext.Provider value={state.user}>
            <MainStackNavigator />
            <RootStack.Screen
              name={'AuthStack'}
              component={AuthStackNavigator}
            />
          </UserContext.Provider>
        )}
      </RootStack.Screen>
    ) : (
      <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
    );
  }

  //Bagian yang pertama di proses, ketika aplikasi running
  return (
    // AuthContext.Provider untuk mengambil nilai di function useAuth, kemudian nilainya dilempar ke function renderScreen()
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
