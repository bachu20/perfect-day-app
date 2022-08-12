import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

const Quotes = () => {
  return (
    <Layout style={styles.container}>
      <Text category="h1">Quotes</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Quotes;
