import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#262626",
    justifyContent: "space-between",
    borderRadius: 7,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonTasks: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderRadius: 50,
  },

  conclusionTasks: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderRadius: 50,
    backgroundColor: "#4EA8DE",
  },

  textCard: {
    color: "#fff",
    width: 260,
  },

  textCardConclusion: {
    color: "#fff",
    width: 260,
    textDecorationLine: "line-through",
  },

  button: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    lineHeight: 22,
    backgroundColor: "#808080",
    borderRadius: 5,
  },

  removeTasks: {
    color: "#fff",
  },
});
