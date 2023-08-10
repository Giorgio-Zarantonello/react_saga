import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addCat, deleteCat} from '../slice/catSlice';
const CatList = () => {
  const dispatch = useDispatch();
  const cats = useSelector(state => state.cat.cats);
  const handleAddCat = () => {
    dispatch(addCat({title: 'Bijoux', description: 'mixed breed cat 🐱'}));
  };
  const handleDeleteCat = index => {
    dispatch(deleteCat(index));
  };
  return (
    <View>
      <Button title="Add default Cat" onPress={handleAddCat} />
      {cats.map((cat, index) => (
        <View key={index}>
          <Text>{'Name : ' + cat.title}</Text>
          <Text>{'Description : ' + cat.description}</Text>
          <Button title="Delete Cat" onPress={() => handleDeleteCat(index)} />
        </View>
      ))}
    </View>
  );
};

export default CatList;
