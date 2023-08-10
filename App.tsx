import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddTaskScreen from './src/components/AddTaskScreen';
import store from './src/store/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Add Task"
            component={AddTaskScreen}
            options={{
              title: 'Add Task',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
}

export default App;