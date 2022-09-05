import { StyleSheet, FlatList, Image } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import { spacing } from "../utils/styles";

import api, { useGetPhotosQuery } from "../services/api";

const renderPhoto = ({ item }) => (
  <Layout style={styles.photo}>
    <Image source={{ uri: item.src.original }} style={styles.image} />
  </Layout>
);

const Photos = () => {
  const { data: userData } = api.endpoints.getUser.useQueryState();
  const { data: photosData, isLoading } = useGetPhotosQuery(userData.mood);

  return isLoading ? (
    <Text>Loading</Text>
  ) : (
    <Layout style={styles.container}>
      <FlatList
        data={photosData.photos}
        keyExtractor={(item) => item.id}
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
