import React, { useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  name: string;
  placeholder: string;
  form: UseFormReturn<any, any>;
}

export default function ControlledPasswordInput({
  name,
  placeholder,
  form,
}: IProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field }) => (
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.input]}
            placeholder={placeholder}
            value={field.value}
            onChangeText={field.onChange}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((prev) => !prev)}
            style={styles.iconContainer}
          >
            <Ionicons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    paddingRight: 35,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    top: 15,
  },
});
