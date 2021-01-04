import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

import firebase from 'firebase';

class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    onSignUp() {
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log('SUCCESS');
                console.log(result);
                this.props.navigation.replace('Home');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='email'
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <View style = {styles.button}>
                    <Button onPress={() => this.onSignUp()} color="grey" title='Sign In' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
    },

    button: {
        marginHorizontal: 100, 
        marginVertical: 20
    }
});

export default Login;
