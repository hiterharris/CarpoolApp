import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class CarpoolsScreen extends React.Component {
    static navigationOptions = {
        title: 'Carpools',
      };
    
    render() {
      return (
        <View style={styles.container}>
            <Text>Carpools</Text>
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

export default CarpoolsScreen;