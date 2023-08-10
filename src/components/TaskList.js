import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, deleteTask} from '../slice/taskSlice';
const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.task.tasks);
  const handleAddTask = () => {
    dispatch(addTask({title: 'Task 1', description: 'Description 1'}));
  };
  const handleDeleteTask = index => {
    dispatch(deleteTask(index));
  };
  return (
    <View>
      <Button title="Add default Task" onPress={handleAddTask} />
      {tasks.map((task, index) => (
        <View key={index}>
          <Text>{task.title}</Text>
          <Text>{task.description}</Text>
          <Button title="Delete Task" onPress={() => handleDeleteTask(index)} />
        </View>
      ))}
    </View>
  );
};

export default TaskList;
