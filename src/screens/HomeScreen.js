import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#4267B2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.pickupTime}>
                    <Text style={styles.pickupText}>Pickup Time:</Text>
                    <TextInput
                    placeholder="Select Time"
                    style={styles.pickupInput}
                    />
                </View>

                <View style={styles.buttons}>

                    <View style={styles.buttonBlock}>
                        <Button
                        style={styles.inviteButton}
                        title="Invite"
                        onPress={ () => this.props.navigation.navigate('Invite')}
                        />
                    </View>

                    
                    <View style={styles.buttonBlock}>
                        <Button
                        style={styles.carpoolsButton}
                        title="Carpools"
                        onPress={ () => this.props.navigation.navigate('Carpools')}
                        />
                    </View>

                    
                    <View style={styles.pickupButtonBlock}>
                        <Button
                        style={styles.pickupButton}
                        title="Pickup"
                        onPress={ () => this.props.navigation.navigate('Pickup')}
                        />
                    </View>
                </View>

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
    pickupTime: {
        flexDirection: 'row',
    },
    pickupText: {
        fontSize: 28,
        margin: 10,
    },
    buttons: {
        alignItems: 'center',
        margin: 100,
    },
    buttonBlock: {
        width: 150,
        borderWidth: 1,
        margin: 30,
        paddingTop: 15,
        paddingBottom: 15,
    },
    pickupButtonBlock: {
        width: 200,
        borderWidth: 1,
        margin: 30,
        paddingTop: 20,
        paddingBottom: 20,
    },
  });

export default HomeScreen;