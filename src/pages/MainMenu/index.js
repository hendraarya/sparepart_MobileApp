import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {HeaderIconButton} from '../../components/HeaderIconButton';
import {AuthContext} from '../../contexts/AuthContext';
import {UserContext} from '../../contexts/UserContext';
import {FilledButton} from '../../components/FilledButton';
import {AuthContainer} from '../../components/AuthContainer';

export function MainMenu({navigation}) {
  const {
    auth: {logout},
  } = React.useContext(AuthContext);
  const user = React.useContext(UserContext);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIconButton
          name={'log-out'}
          onPress={() => {
            logout();
          }}
        />
      ),
    });
  }, [navigation]);
  return (
    <AuthContainer>
      <Text>Welcome {user.email} </Text>
      <Text style={styles.textMenu}>Selection Main Menu :</Text>
      <FilledButton title={'Transaction Part Out'} style={styles.loginButton} />
      <FilledButton
        title={'Stock Part In'}
        onPress={() => {
          navigation.navigate('Stockpartin');
        }}
      />
    </AuthContainer>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  loginButton: {
    marginVertical: 32,
    marginTop: 10,
  },
  textMenu: {fontSize: 20, fontWeight: '500', paddingVertical: 15},
});
