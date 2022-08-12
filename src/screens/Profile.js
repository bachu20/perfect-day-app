import { StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

import colors from "../utils/colors";

import MenuCard from "../components/MenuCard";
import Bg1 from "../../assets/bg/medhat-ayad.jpg";
import Bg2 from "../../assets/bg/dominika-roseclay.jpg";
import Bg3 from "../../assets/bg/tingey-injury-law-firm.jpg";

const Profile = () => {
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
        <MenuCard heading="A Willful Image" image={Bg1} />
        <MenuCard heading="A Wonderful Song" reverse={true} image={Bg2} />
        <MenuCard heading="A Wise Quote" image={Bg3} />
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
    backgroundColor: colors.black1,
    paddingHorizontal: 25,
  },
  headerText: {
    alignSelf: "center",
    color: colors.white,
  },
  headerQuote: {
    textAlign: "center",
    marginTop: 10,
    color: colors.white,
  },
  moodBtn: {
    backgroundColor: colors.white,
    maxWidth: 175,
    alignSelf: "center",
    marginTop: 25,
  },
  body: {
    flex: 2,
    backgroundColor: colors.grey1,
  },
});

export default Profile;
