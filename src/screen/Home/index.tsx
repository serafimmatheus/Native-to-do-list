import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  ImageBackground,
  FlatList,
  Alert,
} from "react-native";
import { CardTasks } from "../../components/CardTasks";
import { Input } from "../../components/Input";
import { styles } from "./style";

export const Home = () => {
  const [tasks, setTasks] = useState<Object[]>([]);

  const [nameTask, setNameTask] = useState("");

  const addTasks = () => {
    const newTask = {
      description: nameTask,
      conclusion: false,
    };
    setTasks([...tasks, newTask]);
    setNameTask("");
  };

  const handleConclusionTasks = () => {
    Alert.alert("Concluido");
  };
  const handleDeletedTasks = () => {
    Alert.alert("Deletado");
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Text style={styles.text}>TO DO</Text>
      <Input onPress={addTasks} setNameTask={setNameTask} nameTask={nameTask} />

      <View style={styles.sectionFilter}>
        <View style={styles.sectionFilterContainer}>
          <Text style={styles.criadas}>Criadas</Text>
          <Text style={styles.textNumber}>{tasks.length}</Text>
        </View>

        <View style={styles.sectionFilterContainer}>
          <Text style={styles.concluidas}>Concluídas</Text>
          <Text style={styles.textNumber}>{tasks.length}</Text>
        </View>
      </View>

      <View>
        <FlatList
          style={styles.containerFlat}
          data={tasks}
          keyExtractor={(item) => item.description}
          renderItem={({ item }) => (
            <CardTasks
              tasks={item}
              onConclusion={handleConclusionTasks}
              onDeleted={handleDeletedTasks}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.containerFlat}>
              <Text style={styles.textEmptyBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.textEmpty}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};
