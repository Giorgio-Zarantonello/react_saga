import React from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../slice/taskSlice";

const AddTaskScreen = () => {
    const dispatch = useDispatch();
    const [ title , setTitle ] = React.useState("");
    const [ description , setDescription ] = React.useState("");

    const handleAddTask = () => {
        dispatch(addTask({ title, description }));
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
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    );
};

export default AddTaskScreen;