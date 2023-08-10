import React from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addCat } from "../slice/catSlice";

const AddCatScreen = () => {
    const dispatch = useDispatch();
    const [ title , setTitle ] = React.useState("");
    const [ description , setDescription ] = React.useState("");

    const handleAddCat = () => {
        dispatch(addCat({ title, description }));
        setTitle("");
        setDescription("");
    };

    return (
        <View>
            <TextInput
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <Button title="Add Cat" onPress={handleAddCat} />
        </View>
    );
};

export default AddCatScreen;