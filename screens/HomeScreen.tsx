import React, {useState} from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Task from '../components/Task';

const Stack = createStackNavigator();

const HomeComponent = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTaskItems(null);
  };

  const completeTask = () => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Vos Tâches Quotidienne</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask()}>
                <Task text={item} />;
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Ecrire une tâche'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    backgroundColor: '#2B4C75',
    borderWidth: 1,
    width: 250,
    color: '#FFF',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#2B4C75',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: '#FFF',
  },
});
