const superagent = require("superagent");

const { QUOTES_API_BASE_PATH } = require("../config");

exports.load = (app) => {
  app.get("/quotes", async (req, res, next) => {
    try {
      const response = await superagent.get(QUOTES_API_BASE_PATH + req.url);
      res.status(response.statusCode).json({ data: response.body });
    } catch (error) {
      return next(error);
    }
  });

  return app;
};

exports.skipAuth = true;
