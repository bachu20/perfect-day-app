import { StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import { useAssets } from "expo-asset";

import { colors, spacing } from "../utils/styles";

import MenuCard from "../components/MenuCard";

const Profile = () => {
  const [assets] = useAssets([
    require("../../assets/bg/medhat-ayad.jpg"),
    require("../../assets/bg/dominika-roseclay.jpg"),
    require("../../assets/bg/tingey-injury-law-firm.jpg"),
  ]);

  const images = assets ?? [];

  return (
    <Layout style={styles.container}>
      <Layout style={styles.header}>
        <Text style={styles.headerText} category="h1" appearance="alternative">
          Perfect Day
        </Text>

        <Text style={styles.headerQuote} category="s1" appearance="alternative">
          "Whatever the mind of man can conceive and believe, it can achieve."
        </Text>

        <Button style={styles.moodBtn} appearance="ghost" activeOpacity={0.75}>
          What's my mood?
        </Button>
      </Layout>

      <Layout style={styles.body}>
        <MenuCard heading="A Willful Image" image={images[0]} />
        <MenuCard heading="A Wonderful Song" reverse={true} image={images[1]} />
        <MenuCard heading="A Wise Quote" image={images[2]} />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.black,
    paddingHorizontal: spacing.get(5),
  },
  headerText: {
    alignSelf: "center",
    color: colors.white,
  },
  headerQuote: {
    textAlign: "center",
    marginTop: spacing.get(2),
    color: colors.white,
  },
  moodBtn: {
    backgroundColor: colors.white,
    maxWidth: 175,
    alignSelf: "center",
    marginTop: spacing.get(5),
  },
  body: {
    flex: 2,
    backgroundColor: colors.grey1,
  },
});

export default Profile;
