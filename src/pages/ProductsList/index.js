import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HeaderIconButton} from '../../components/HeaderIconButton';
import {AuthContext} from '../../contexts/AuthContext';
import {UserContext} from '../../contexts/UserContext';

export function ProductsList({navigation}) {
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
    <View style={styles.container}>
      <Text>Welcome to the Product List</Text>
      <Text>{user.email}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
