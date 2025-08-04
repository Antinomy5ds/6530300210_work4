import { TextInput, View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const User = ({ user, setUser, pass, setPass, userError, passError }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        flexDirection: "column",
      }}
    >
      {/* Name Field */}
      <View style={[styles.InputBox, userError && styles.ErrorBox]}>
        <AntDesign name="user" size={20} color={userError ? "red" : "black"} />
        <TextInput
          placeholder="Your Name"
          placeholderTextColor={userError ? "red" : "#888"}
          value={user}
          onChangeText={setUser}
          style={[styles.Input, userError && { color: "red" }]}
        />
      </View>

      {/* Email Field */}
      <View style={[styles.InputBox, passError && styles.ErrorBox]}>
        <MaterialCommunityIcons
          name="email-outline"
          size={20}
          color={passError ? "red" : "black"}
        />
        <TextInput
          placeholder="Your Email"
          placeholderTextColor={passError ? "red" : "#888"}
          value={pass}
          onChangeText={setPass}
          style={[styles.Input, passError && { color: "red" }]}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  InputBox: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    borderColor: "black",
    height: 40,
  },
  ErrorBox: {
    borderColor: "red",
  },
  Input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
  },
});
