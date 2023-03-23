const router = require("express").Router();
const Account = require("./accounts-model");
const {
  checkAccountId,
  checkAccountPayload,
} = require("./accounts-middleware");
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

router.post("/", checkAccountPayload, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    let postedAccount = await Account.create(req.body);
    res.json(postedAccount);
  } catch (err) {
    next(err);
  }
});

router.put(
  "/:id",
  checkAccountId,
  checkAccountPayload,
  async (req, res, next) => {
    // DO YOUR MAGIC
  }
);

router.delete("/:id", checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    let result = await Account.deleteById(req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
