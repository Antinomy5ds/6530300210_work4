import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { User } from "./User";

export const Header = ({ userForm, updateUserForm, addUserForm, errors }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#dedede",
          alignItems: "center",
          width: "100%",
          height: 60,
          justifyContent: "center",
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Add User</Text>
        <TouchableOpacity
          style={{ position: "absolute", right: 15 }}
          onPress={addUserForm}
        >
          <AntDesign name="adduser" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1, marginTop: 10 }}>
        {userForm.map(({ id, name, email }) => (
          <User
            key={id}
            user={name}
            setUser={(val) => updateUserForm(id, "name", val)}
            pass={email}
            setPass={(val) => updateUserForm(id, "email", val)}
            userError={errors?.[id]?.name}
            passError={errors?.[id]?.email}
          />
        ))}
      </ScrollView>
    </View>
  );
};
