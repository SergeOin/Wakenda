import React from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Task from "../components/Task";

const Stack = createStackNavigator();

const HomeComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Vos Tâches Quotidienne</Text>
        <View style={styles.items}>
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
        </View>
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  items: {
    marginTop: 30,
  },
});
