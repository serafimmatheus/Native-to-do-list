import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    padding: 24,
  },

  input: {
    flex: 1,
    height: 54,
    borderRadius: 5,
    backgroundColor: "#262626",
    marginRight: 10,
    padding: 10,
    color: "#fff",
    fontSize: 16,
  },

  button: {
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 22,
  },
});
