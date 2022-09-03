import { StyleSheet, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import { colors, spacing } from "../utils/styles";
import userApi, { usePatchUserMutation } from "../services/users";

import MOODS_CONFIG from "../utils/moods";

const MoodItem = ({ mood, active, onPress }) => {
  const textStyles = { ...styles.moodTitle };

  if (active) {
    textStyles.color = MOODS_CONFIG.colors[mood];
  }

  return (
    <Layout
      style={{
        flex: 1,
        backgroundColor: active ? colors.black : colors.white,
      }}
    >
      <TouchableOpacity style={styles.moodItem} onPress={() => onPress(mood)}>
        <Text style={{ ...textStyles }} category="h6">
          {mood}
        </Text>
      </TouchableOpacity>
    </Layout>
  );
};

const Mood = () => {
  const { data } = userApi.endpoints.getUser.useQueryState();
  const [updateUser] = usePatchUserMutation();

  return (
    <Layout style={{ flex: 1 }}>
      {MOODS_CONFIG.moods.map((mood) => (
        <MoodItem
          key={mood}
          mood={mood}
          active={mood === data?.mood?.toLowerCase()}
          onPress={(m) => updateUser({ mood: m.toUpperCase() })}
        />
      ))}
    </Layout>
  );
};

const styles = StyleSheet.create({
  moodItem: {
    backgroundColor: colors.black,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: spacing.get(2),
    borderRadius: 105 / 2,
    height: 105,
    width: 105,
  },
  moodTitle: {
    textAlign: "center",
    color: colors.white,
  },
});

export default Mood;
