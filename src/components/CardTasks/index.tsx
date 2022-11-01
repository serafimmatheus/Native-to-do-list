import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface Props {
  description: String;
  conclusion: Boolean;
  onConclusion: () => void;
  onDeleted: () => void;
}

export const CardTasks = ({ tasks, onConclusion, onDeleted }: Props) => {
  return (
    <View style={styles.container}>
      {tasks.conclusion ? (
        <TouchableOpacity>
          <Text style={styles.conclusionTasks}></Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onConclusion}>
          <Text style={styles.buttonTasks}></Text>
        </TouchableOpacity>
      )}

      {tasks.conclusion ? (
        <Text style={styles.textCardConclusion}>{tasks.description}</Text>
      ) : (
        <Text style={styles.textCard}>{tasks.description}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={onDeleted}>
        <Text style={styles.removeTasks}>X</Text>
      </TouchableOpacity>
    </View>
  );
};
