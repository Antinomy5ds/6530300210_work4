import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Header } from "./Header";

export default function App() {
  const [userForm, setUserForm] = useState([
    { id: Date.now(), name: "", email: "" },
  ]);

  const [errors, setErrors] = useState({}); // { id: { name: true/false, email: true/false } }

  const addUserForm = () => {
    console.log("Add new component")
    const newId = Date.now();
    setUserForm((prev) => [...prev, { id: newId, name: "", email: "" }]);
    setErrors((prev) => ({ ...prev, [newId]: { name: false, email: false } }));
  };

  const updateUserForm = (id, key, value) => {
    setUserForm((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [key]: value } : item))
    );
  };

  const handleSave = () => {
    const newErrors = {};
    userForm.forEach(({ id, name, email }) => {
      newErrors[id] = {
        name: name.trim() === "",
        email: email.trim() === "",
      };
    });
    setErrors(newErrors);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 2 }}>
        <Header
          userForm={userForm}
          updateUserForm={updateUserForm}
          addUserForm={addUserForm}
          errors={errors}
        />
        <StatusBar style="auto" />
      </View>
      <View style={{ flex: 0.15 }}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  saveButton: {
    backgroundColor: "#2F80DE",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  saveText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
