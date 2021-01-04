import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import moment from 'moment';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={{marginVertical: 20, fontSize: 20}}>Hello, Bogdan</Text>
            <Button title='Logout' color="grey" onPress={() => navigation.replace('Landing')} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
