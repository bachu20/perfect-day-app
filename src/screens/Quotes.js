import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";

import { colors, spacing } from "../utils/styles";

import api, { useGetQuotesQuery } from "../services/api";

import MOODS_CONFIG from "../utils/moods";

const renderQuote = ({ item }) => (
  <Layout style={styles.card}>
    <Text style={styles.quote} category="s1">
      {item.content}
    </Text>

    <Layout style={styles.quoteAuthor}>
      <Text category="s2">~ {item.author}</Text>
    </Layout>
  </Layout>
);

const Quotes = () => {
  const { data: userData } = api.endpoints.getUser.useQueryState();

  const tags = MOODS_CONFIG.TAGS[userData.mood.toLowerCase()] ?? [];

  const { data: quotesData, isLoading } = useGetQuotesQuery(
    `sortBy=dateModified&tags=${tags.join("|")}`
  );

  return isLoading ? (
    <Text>Loading</Text>
  ) : (
    <Layout style={styles.container}>
      <FlatList
        data={quotesData}
        keyExtractor={(item) => item._id}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    paddingHorizontal: spacing.get(3),
    paddingTop: spacing.get(3),
  },
  card: {
    marginBottom: spacing.get(3),
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
