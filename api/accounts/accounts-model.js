const db = require("../../data/db-config");

const getAll = async () => {
  // DO YOUR MAGIC
  const result = await db("accounts");
  return result;
};

const getById = async (id) => {
  // DO YOUR MAGIC
  const [result] = await db("accounts").where("id", id);
  return result;
};

const create = (account) => {
  // DO YOUR MAGIC
};

const updateById = (id, account) => {
  // DO YOUR MAGIC
};

const deleteById = async (id) => {
  // DO YOUR MAGIC
  const deletedItem = await getById(id);
  await db("accounts").del().where("id", id);
  return deletedItem;
};

// async function remove(shipperId) {
//   const toBeDeleted = await getById(shipperId);
//   await db("shippers").del().where("shipperid", shipperId);
//   return toBeDeleted;
// }

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
