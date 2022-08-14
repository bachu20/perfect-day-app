import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";

import { colors, spacing } from "../utils/styles";

const quotes = new Array(3).fill(
  "The Maldives, officially the Republic of Maldives, is a small country in..."
);

const renderQuote = ({ item }) => (
  <Layout style={styles.card}>
    <Text style={styles.quote} category="s1">
      {item}
    </Text>

    <Layout style={styles.quoteAuthor}>
      <Text category="s2">~ John Doe</Text>
    </Layout>
  </Layout>
);

const Quotes = () => {
  return (
    <Layout style={styles.container}>
      <FlatList
        data={quotes}
        keyExtractor={(_, index) => index}
        initialNumToRender={3}
        renderItem={renderQuote}
        showsVerticalScrollIndicator={false}
      />

      <Layout style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="ios-refresh-outline" size={24} color={colors.black} />
        </TouchableOpacity>
      </Layout>
    </Layout>
  );
};

const addBorder = {
  borderWidth: 1,
  borderColor: "black",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    paddingHorizontal: spacing.get(6),
    paddingTop: spacing.get(3),
  },
  card: {
    marginTop: spacing.get(3),
    padding: spacing.get(5),
    height: 200,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  quoteAuthor: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  controls: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Quotes;
