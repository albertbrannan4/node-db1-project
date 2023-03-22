const Account = require("./accounts-model");
exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
};

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  let idIsValid = await Account.getById(req.params.id);
  if (!idIsValid) {
    next({ status: 404, message: "account not found" });
  } else {
    next();
  }
};
