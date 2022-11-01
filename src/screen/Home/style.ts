import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    flex: 1,
  },

  text: {
    marginTop: 60,
    color: "#fff",
    fontSize: 26,
    textAlign: "center",
  },

  sectionFilter: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
  },

  sectionFilterContainer: {
    flexDirection: "row",
  },

  concluidas: {
    color: "#8284FA",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 10,
  },

  textNumber: {
    color: "#fff",
    backgroundColor: "#333333",
    width: 25,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  criadas: {
    fontSize: 16,
    color: "#4EA8DE",
    fontWeight: "600",
    marginRight: 10,
  },

  textEmptyContainer: {
    padding: 24,
    borderTopWidth: 1,
    borderColor: "#808080",
  },
  textEmpty: {
    color: "#808080",
    textAlign: "center",
  },
  textEmptyBold: {
    color: "#808080",
    textAlign: "center",
    fontWeight: "900",
  },

  containerFlat: {
    padding: 24,
  },
});
