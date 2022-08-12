import { StyleSheet, FlatList, Image } from "react-native";
import { Layout } from "@ui-kitten/components";

const NUM_COLS = 2;

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
    <Layout style={styles.photos}>
      <FlatList
        data={sample}
        keyExtractor={(item) => item}
        initialNumToRender={3}
        renderItem={renderPhoto}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  photos: {
    paddingVertical: 10,
  },
  photo: {
    flex: 1 / NUM_COLS,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  image: {
    aspectRatio: 1,
    flex: 1,
    height: undefined,
    width: undefined,
  },
});

export default Photos;
