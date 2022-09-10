module.exports = (options = {}) => {
  return (err, req, res, next) => {
    const inferredCode = (err.stack || "").split(": ")[0];

    let code;
    switch (err.status) {
      case 422:
        code = "ParamValidation";
        break;
      default:
        code = err.code || inferredCode || "Unknown";
    }

    const errMsg = err.message || err.text;

    return res
      .status(err.status || 500)
      .json({ code, message: errMsg, raw: err });
  };
};
