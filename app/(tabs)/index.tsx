import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useForm } from "react-hook-form";
import ControlledTextInput from "@/components/ControlledTextInput";
import ControlledPasswordInput from "@/components/ControlledPasswordInput";
import { Validators } from "@/utils/validators";

export default function HomeScreen() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    Alert.alert("Login feito com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <ControlledTextInput
        name="email"
        placeholder="E-mail"
        form={form}
        blurValidationFunction={Validators.email}
        errorMessage="e-mail inválido!"
      />
      <ControlledPasswordInput
        name="password"
        placeholder="Senha"
        form={form}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={form.handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
