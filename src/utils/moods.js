const MOODS_CONFIG = {
  HAPPY: {
    color: "#FFFF00",
    icon: "ios-happy",
    tags: ["success", "happiness", "inspirational", "humor", "family", "love"],
  },
  FIERCE: {
    color: "#FF4433",
    tags: ["war", "power-quotes", "history", "leadership"],
  },
  ENERGETIC: {
    color: "#FFA500",
    icon: "ios-flash",
    tags: ["athletics", "competition", "courage"],
  },
  SERENE: {
    color: "#00FFFF",
    tags: ["wisdom", "virtue", "truth", "nature"],
  },
  MYSTICAL: {
    color: "#CF9FFF",
    tags: [
      "spirituality",
      "truth",
      "religion",
      "proverb",
      "philosophy",
      "faith",
    ],
  },
  GLOOMY: {
    color: "#D3D3D3",
    icon: "ios-sad",
    tags: ["pain", "self", "self-help"],
  },
};

MOODS_CONFIG.MOODS = Object.keys(MOODS_CONFIG);

export default MOODS_CONFIG;
