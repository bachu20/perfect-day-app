import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";

const MenuCard = ({ heading, image, reverse }) => {
  const flexDirection = reverse ? "row-reverse" : "row";

  return (
    <Layout style={{ ...styles.card, flexDirection }}>
      <TouchableOpacity style={styles.heading}>
        <Text category="h6">{heading}</Text>
      </TouchableOpacity>

      {/* <Ionicons style={styles.icon} name="ios-image" size={50} /> */}
      <Image style={styles.image} source={image} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
  },
  heading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    alignSelf: "flex-end",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});

export default MenuCard;
