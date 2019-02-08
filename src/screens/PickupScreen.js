import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

class PickupScreen extends React.Component {
    static navigationOptions = {
        title: 'Pickup',
      };
    
    render() {
      return (
        <View style={styles.container}>

            <View>
              <Text style={styles.pickupMessage}>You are ready to pick up!</Text>
            </View>

            <View style={styles.userBlock}>
              <Image
                style={styles.user}
                source={require('/Users/henryharrisiv/Desktop/CarpoolApp/images/user.png')}
              />
              {/* <Text>Child #1</Text> */}
            </View>

            <View style={styles.userBlock}>
              <Image
                style={styles.user}
                source={require('/Users/henryharrisiv/Desktop/CarpoolApp/images/user.png')}
              />
              {/* <Text>Child #1</Text> */}
            </View>

            <View style={styles.pickupButtonBlock}>
              <Button
              style={styles.pickupButton}
              title="Pickup"
              onPress={ () => this.props.navigation.navigate('Pickup')}
              />
            </View>
            
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    pickupMessage: {
      fontSize: 28,
    },
    userBlock: {

    },
    user: {
      width: 100,
      height: 100,
    },
    pickupButtonBlock: {
      width: 200,
      borderWidth: 1,
      margin: 30,
      paddingTop: 20,
      paddingBottom: 20,
  },
  });

export default PickupScreen;