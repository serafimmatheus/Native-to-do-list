import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface Props {
  onPress: () => void;
  setNameTask: () => String;
  nameTask: String;
}

export const Input = ({ onPress, setNameTask, nameTask }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setNameTask}
        value={nameTask}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
