const Account = require("./accounts-model");
exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  const { name, budget } = req.body;
  const regex = /^[0-9]*$/;
  const BudgetIsNumber = regex.test(budget);

  if (!name || !budget) {
    next({ status: 400, message: "name and budget are required" });
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    next({ status: 400, message: "name of account must be between 3 and 100" });
  } else if (parseInt(budget) < 0 || parseInt(budget) > 1000000) {
    next({
      status: 400,
      message: "budget of account is too large or too small",
    });
  } else if (!BudgetIsNumber) {
    next({ status: 400, message: "budget of account must be a number" });
  } else {
    const trimmedName = name.trim();
    const budgetToNum = parseInt(budget);
    req.body.name = trimmedName;
    req.body.budget = budgetToNum;

    next();
  }
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
