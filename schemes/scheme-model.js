// scheme-model
const db = require("../data/db-config");

module.exports = {
  find() {
    return db("schemes");
  },
  findById(id) {
    return db("schemes").where({ id }).first();
  },
  findSteps(id) {
    return db("schemes as s")
      .join("steps as p", "s.id", "p.scheme_id")
      .orderBy("p.step_number")
      .select("s.scheme_name", "p.step_number", "p.instructions")
      .where({ "s.id": id });
  },
  add(scheme) {
    return db("schemes").insert(account);
  },
  update(changes, id) {
    return db("schemes").where({ id }).update(account);
  },
  remove(id) {
    return db("schemes").where({ id }).del();
  },
};
