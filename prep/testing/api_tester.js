const axios = require("axios");

const TestZenQuotes = async () => {
  const response = await axios.get("https://zenquotes.io/api/quotes");
  debugger;
};

TestZenQuotes();
