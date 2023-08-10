import React from 'react';
import {View} from 'react-native';
import AddTaskScreen from './AddTaskScreen';
import TaskList from './TaskList';

const MainScreen = () => {
  return (
    <View>
      <AddTaskScreen />
        <TaskList />
      </View>
  );
};

export default MainScreen;
