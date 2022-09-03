import { StyleSheet, FlatList, Image } from "react-native";
import { Layout } from "@ui-kitten/components";

import { spacing } from "../utils/styles";

const sample = new Array(11)
  .fill(1)
  .map((_, i) => `https://picsum.photos/seed/${i + Math.random()}/640/360`);

const renderPhoto = ({ item: uri }) => (
  <Layout style={styles.photo}>
    <Image source={{ uri }} style={styles.image} />
  </Layout>
);

const Photos = () => {
  return (
    <Layout style={styles.container}>
      <FlatList
        data={sample}
        keyExtractor={(item) => item}
        initialNumToRender={3}
        renderItem={renderPhoto}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.get(3),
    paddingBottom: spacing.get(3),
  },
  photo: {
    marginTop: spacing.get(3),
  },
  image: {
    aspectRatio: 1,
    flex: 1,
    height: undefined,
    width: undefined,
  },
});

export default Photos;
