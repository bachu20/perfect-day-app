const superagent = require("superagent");

const { PEXELS_API_BASE_PATH } = require("../config");
const { PERFECT_DAY_PEXELS_API_KEY } = process.env;

exports.load = (app) => {
  app.get("/photos", async (req, res, next) => {
    try {
      const queries = [];

      for (const q in req.query) {
        queries.push(`${q}=${req.query[q]}`);
      }

      const response = await superagent
        .get(PEXELS_API_BASE_PATH + `?${queries.join("&")}`)
        .auth(PERFECT_DAY_PEXELS_API_KEY, { type: "bearer" });

      res.status(response.statusCode).json({ data: response.body });
    } catch (error) {
      return next(error);
    }
  });

  return app;
};

exports.skipAuth = true;
