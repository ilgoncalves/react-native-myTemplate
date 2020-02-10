import React from 'react';
import { View, Text } from 'react-native';
import Theme from '../theme/Theme';


function WelcomeText({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
}

const styles = {
  container: {
    paddingHorizontal: 26
  },
  text: {
    textAlign: 'center',
    fontSize: 27,
    color: 'white'
  }
}

export { WelcomeText }