import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class InviteScreen extends React.Component {
    static navigationOptions = {
        title: 'Invite',
      };
    
    render() {
      return (
        <View style={styles.container}>
          <Text>Invite</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

export default InviteScreen;