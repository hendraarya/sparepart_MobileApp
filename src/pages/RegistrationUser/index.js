import React from 'react';
import {StyleSheet} from 'react-native';

//Class in folder components
import {Heading} from '../../components/Heading';
import {Input} from '../../components/Input';
import {FilledButton} from '../../components/FilledButton';
import {IconButton} from '../../components/IconButton';
import {AuthContext} from '../../contexts/AuthContext';
import {AuthContainer} from '../../components/AuthContainer';
import {Error} from '../../components/Error';
import {Loading} from '../../components/Loading';

export default function RegistrationUser({navigation}) {
  const {auth: {register}} = React.useContext(AuthContext); //untuk masuk ke function register di App.js
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [c_password, setCPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  return (
    <AuthContainer>
      <IconButton
        style={style.closeIcon}
        name={'close-circle-outline'}
        onPress={() => {
          navigation.pop();
        }}
      />
      <Heading style={style.title}>REGISTRATION</Heading>
      <Error error={error} />
      <Input
        placeholder="Name"
        style={style.input}
        value={name}
        onChangeText={value => setName(value)}
      />
      <Input
        placeholder="Email"
        style={style.input}
        keyboardType="email-address"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <Input
        placeholder="Password"
        style={style.input}
        secureTextEntry={true}
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <Input
        placeholder="Confirm Password"
        style={style.input}
        secureTextEntry={true}
        value={c_password}
        onChangeText={value => setCPassword(value)}
      />
      <FilledButton
        title="Register"
        style={style.loginButton}
        onPress={async () => {
          const data = {
            name,
            email,
            password,
            c_password,
          };
          try {
            setLoading(true);
            await register(data);
            navigation.pop();
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
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
  closeIcon: {position: 'absolute', top: 60, right: 16},
});
