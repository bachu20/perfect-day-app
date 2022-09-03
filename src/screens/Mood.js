import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import { colors, spacing } from "../utils/styles";

import { useGetUserQuery } from "../services/users";

const moods = {
  happy: "#FFFF00",
  fierce: "#FF4433",
  energetic: "#FFA500",
  serene: "#00FFFF",
  mystical: "#CF9FFF",
  gloomy: "#D3D3D3",
};

const MoodItem = ({ mood, active, onPress }) => {
  const textStyles = { ...styles.moodTitle };

  if (active) {
    textStyles.color = moods[mood];
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
  const [activeMood, setActiveMood] = useState();
  const { data } = useGetUserQuery();

  console.log("data:", data);

  return (
    <Layout style={{ flex: 1 }}>
      {Object.keys(moods).map((mood) => (
        <MoodItem
          key={mood}
          mood={mood}
          active={mood === activeMood}
          onPress={(m) => setActiveMood(m)}
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
