import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";

import firebase from "firebase";
import {
    validateEmail,
    validatePassword,
    validatePhone,
} from "./helperFunctions";

class Register extends Component {
    state = {
        email: "",
        password: "",
        name: "",
        phone: "",
        isValidEmail: true,
        isValidPassword: true,
        isValidPhone: true,
    };

    onSignUp() {
        const { email, password, name, phone } = this.state;
        if (!validatePhone(phone)) {
            this.setState({ isValidPhone: false });
        } else {
            this.setState({ isValidPhone: true });
        }
        if (!validateEmail(email)) {
            this.setState({ isValidEmail: false });
        } else {
            this.setState({ isValidEmail: true });
        }
        if (!validatePassword(password)) {
            this.setState({ isValidPassword: false });
        } else {
            this.setState({ isValidPassword: true });
        }

        if(!this.state.isValidPhone || !this.state.isValidEmail || !this.state.isValidPassword){
            return;
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
                this.props.navigation.replace("Home", {
                    name: name,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const notValidPassword = this.state.isValidPassword ? null : (
            <Text style={styles.warning}>Password is not valid</Text>
        );
        const notValidEmail = this.state.isValidEmail ? null : (
            <Text style={styles.warning}>Email is not valid</Text>
        );
        const notValidPhone = this.state.isValidPhone ? null : (
            <Text style={styles.warning}>Phone number is not valid</Text>
        );

        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="name"
                    autoCorrect={false}
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput
                    style={styles.input}
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="phone"
                    onChangeText={(phone) => this.setState({ phone })}
                />
                {notValidPhone}
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="email"
                    onChangeText={(email) => this.setState({ email })}
                />
                {notValidEmail}
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                {notValidPassword}
                <View style = {styles.button}>
                    <Button onPress={() => this.onSignUp()} color="grey" title="Sign Up" />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
    },

    warning: {
        color: 'red',
        textAlign: 'center',
    },

    button: {
        marginHorizontal: 100, 
        marginVertical: 20
    }
});

export default Register;
