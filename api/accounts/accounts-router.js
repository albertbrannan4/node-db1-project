const router = require("express").Router();
const Account = require("./accounts-model");
const { checkAccountId } = require("./accounts-middleware");
router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  const AllAccounts = await Account.getAll();
  res.status(200).json(AllAccounts);
});

router.get("/:id", checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  const specificAccount = await Account.getById(req.params.id);
  res.status(200).json(specificAccount);
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
});

router.put("/:id", checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
