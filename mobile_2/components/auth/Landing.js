import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const Landing = ({ navigation }) => {
    // navigation gives access to the nav container
    return (
        <View style={styles.view}>
            <View style={styles.button}>
                <Button title='Register' color="grey" onPress={() => navigation.navigate('Register')}/>
            </View>
            <View style={styles.button}>
                <Button title='Login' color="grey" onPress={() => navigation.navigate('Login')} />
            </View>
            <View style={{marginVertical: 30}}>
                <Button title="Calendar" onPress={() => navigation.navigate('Calendar')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1, 
        justifyContent: 'center',
        marginHorizontal: 60
    },

    button: {
        marginVertical: 10
    }
});
export default Landing;
