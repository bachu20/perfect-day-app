import { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Input } from "@ui-kitten/components";

const Login = () => {
  const [value, setValue] = useState("");

  return (
    <Layout style={{ flex: 1 }}>
      <Input
        style={styles.input}
        size="medium"
        placeholder="Medium"
        value={value}
        onChangeText={setValue}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 2,
  },
});

export default Login;
