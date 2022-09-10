module.exports = {
  PASSWORD_SALT_ROUNDS: 5,

  AUTH_FAILED_RESPONSE: {
    status: 401,
    code: "Unauthorized",
    message: "Authorization failed for request.",
  },

  QUOTES_API_BASE_PATH: "https://api.quotable.io",
  PEXELS_API_BASE_PATH: "https://api.pexels.com/v1/search",
};
