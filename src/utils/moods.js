const MOODS_CONFIG = {
  COLORS: {
    happy: "#FFFF00",
    fierce: "#FF4433",
    energetic: "#FFA500",
    serene: "#00FFFF",
    mystical: "#CF9FFF",
    gloomy: "#D3D3D3",
  },
  TAGS: {
    happy: ["success", "happiness", "inspirational", "humor", "family", "love"],
    fierce: ["war", "power-quotes", "history", "leadership"],
    energetic: ["athletics", "competition", "courage"],
    serene: ["wisdom", "virtue", "truth", "nature"],
    mystical: [
      "spirituality",
      "truth",
      "religion",
      "proverb",
      "philosophy",
      "faith",
    ],
    gloomy: ["pain", "self", "self-help"],
  },
};

MOODS_CONFIG.MOODS = Object.keys(MOODS_CONFIG.COLORS);

export default MOODS_CONFIG;
