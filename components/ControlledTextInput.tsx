import { useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { TextInput, Text, View, StyleSheet } from "react-native";

interface IProps {
  name: string;
  placeholder: string;
  form: UseFormReturn<any, any>;
  blurValidationFunction?: (value: string) => boolean;
  errorMessage?: string;
}

export default function ControlledTextInput({
  name,
  placeholder,
  form,
  blurValidationFunction,
  errorMessage,
}: IProps) {
  const [error, setError] = useState("");

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field }) => (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={field.value}
            onChangeText={(text) => {
              field.onChange(text);
            }}
            onBlur={() => {
              if (blurValidationFunction) {
                const valid = blurValidationFunction(field.value);
                if (valid) form.trigger(name);
                setError(valid ? "" : errorMessage ?? "");
                field.onBlur();
              }
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {error && <Text style={styles.errorText}>{error}</Text>}
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
    },
    errorText: {
      color: "red",
      fontSize: 12,
      marginTop: 5,
    },
  });