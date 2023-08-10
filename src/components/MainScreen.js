import React from 'react';
import {View} from 'react-native';
import AddCatScreen from './AddCatScreen';
import CatList from './CatList';

const MainScreen = () => {
  return (
    <View>
      <AddCatScreen />
      <CatList />
    </View>
  );
};

export default MainScreen;
