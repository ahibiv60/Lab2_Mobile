import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import moment from 'moment';

const utcDateToString = (momentInUTC: moment): string => {
  let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  // console.warn(s);
  return s;
};

class Calendar extends Component {
  state = { text: '' };
  render() {
    const eventTitle = 'Lab2';
    const nowUTC = moment.utc();
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Event title: {eventTitle}</Text>
        <Text>
          date:{' '}
          {moment
            .utc(nowUTC)
            .local()
            .format('lll')}
        </Text>
        <Text></Text>
        <Button
          onPress={() => {
            Calendar.addToCalendar(eventTitle, nowUTC);
          }}
          title="Add to calendar"
        />
      </View>
    );
  }

  static addToCalendar = (title: string, startDateUTC: moment) => {
    const eventConfig = {
      title,
      startDate: utcDateToString(startDateUTC),
      endDate: utcDateToString(moment.utc(startDateUTC).add(1, 'hours')),
      notes: 'tasty!',
      navigationBarIOS: {
        tintColor: 'orange',
        backgroundColor: 'green',
        titleColor: 'blue',
      },
    };

    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then((eventInfo: { calendarItemIdentifier: string, eventIdentifier: string }) => {
        // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
        // These are two different identifiers on iOS.
        // On Android, where they are both equal and represent the event id, also strings.
        // when { action: 'CANCELED' } is returned, the dialog was dismissed
        console.warn(JSON.stringify(eventInfo));
      })
      .catch((error: string) => {
        // handle error such as when user rejected permissions
        console.warn(error);
      });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Calendar;