import React from 'react';
import {
  ActivityIndicator, Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CupertinoHeaderWithLargeTitle from '../components/CupertinoHeaderWithLargeTitle';

const Stack = createStackNavigator();

const HomeComponent = () => {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithLargeTitle
        style={styles.cupertinoHeaderWithLargeTitle}
      />
      <View style={styles.rectStack}>
        <View style={styles.rect} />
        <Image
          source={require('../assets/images/dash_score.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <Image
        source={require('../assets/images/Dash_axe.png')}
        resizeMode="contain"
        style={styles.image2}
      />
    </View>
  );
};

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(232,235,244,1)',
  },
  cupertinoHeaderWithLargeTitle: {
    height: 96,
    width: 375,
    marginTop: 51,
    marginLeft: 15,
  },
  rect: {
    top: 0,
    left: 18,
    width: 248,
    height: 292,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 21,
  },
  image: {
    top: 7,
    left: 0,
    width: 279,
    height: 279,
    position: 'absolute',
  },
  rectStack: {
    width: 279,
    height: 292,
    marginTop: 8,
    marginLeft: 48,
  },
  image2: {
    width: 232,
    height: 263,
    marginTop: 27,
    marginLeft: 74,
  },
});
