import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" hidden />
      <View style={styles.container}>
        <Text>This is React native bottom sheet</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
});

export default App;
