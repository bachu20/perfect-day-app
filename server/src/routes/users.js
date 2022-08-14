const mongoose = require("mongoose");

const User = mongoose.model("User");

exports.load = (app) => {
  app.get("/users", async (req, res, next) => {
    try {
      const users = await User.find().lean();
      return res.status(200).json({ data: users });
    } catch (error) {
      return next(error);
    }
  });

  app.get("/users/:id", async (req, res, next) => {
    try {
      const user = await User.findOne({ _id: req.params.id }).lean();
      return res.status(200).json({ data: user });
    } catch (error) {
      return next(error);
    }
  });

  app.post("/users", async (req, res, next) => {
    const { name, email, password, mood } = req.body.data;

    const isInvalid = [name, email, password].some((v) => !v);

    if (isInvalid) {
      return next({ status: 422, message: "name, email & password required" });
    }

    try {
      const user = await new User({ name, email, password, mood }).save();
      return res.status(200).json({ data: user.toObject() });
    } catch (error) {
      return next(error);
    }
  });

  app.patch("/users/:id", async (req, res, next) => {
    const { name, mood } = req.body.data;

    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { name, mood }
    ).lean();

    return res.status(200).json({ data: user });
  });

  app.delete("/users/:id", async (req, res, next) => {
    try {
      await User.findOneAndDelete({ _id: req.params.id });
      return res.status(200).json({ success: true });
    } catch (error) {
      return next(error);
    }
  });

  return app;
};

exports.skipAuth = true;
