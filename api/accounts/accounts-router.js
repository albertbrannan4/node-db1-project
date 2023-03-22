const router = require("express").Router();
const Account = require("./accounts-model");
router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  const AllAccounts = await Account.getAll();
  res.status(200).json(AllAccounts);
});

router.get("/:id", async (req, res, next) => {
  // DO YOUR MAGIC
  const specificAccount = await Account.getById(req.params.id);
  res.status(200).json(specificAccount);
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
});

module.exports = router;
