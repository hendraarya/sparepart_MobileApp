import React from 'react';
import {StyleSheet} from 'react-native';

//Class in folder components
import {Heading} from '../../components/Heading';
import {Input} from '../../components/Input';
import {FilledButton} from '../../components/FilledButton';
import {TextButton} from '../../components/TextButton';
import {Error} from '../../components/Error';
import {Loading} from '../../components/Loading';
import {AuthContainer} from '../../components/AuthContainer';
import {AuthContext} from '../../contexts/AuthContext';

export default function LoginUser({navigation}) {
  const {
    auth: {login},
  } = React.useContext(AuthContext); //untuk masuk ke function login di App.js
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  return (
    <AuthContainer>
      <Heading style={style.title}>LOGIN</Heading>
      <Error error={error} />

      <Input
        placeholder="Email"
        style={style.input}
        value={email}
        keyboardType="email-address"
        onChangeText={value => setEmail(value)}
      />
      <Input
        placeholder="Password"
        style={style.input}
        value={password}
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
      />
      <FilledButton
        title="Login"
        style={style.loginButton}
        onPress={async () => {
          const data2 = {
            email,
            password,
          };
          try {
            setLoading(true);
            await login(data2);
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }}
      />
      <TextButton
        title={'Have u an account? Create One'}
        onPress={() => {
          navigation.navigate('RegistrationUser');
        }}
      />
      <TextButton
        title={'Halaman Stockpartin'}
        onPress={() => {
          navigation.navigate('Stockpartin');
        }}
      />
      <Loading loading={loading} />
    </AuthContainer>
  );
}

const style = StyleSheet.create({
  textTitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
    fontStyle: 'italic',
    color: '#36100E',
  },
  input: {
    marginVertical: 8,
  },
  title: {marginBottom: 48},
  loginButton: {
    marginVertical: 32,
  },
  textaccount: {paddingBottom: 10},
});
