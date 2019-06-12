exports.seed = function(knex, Promise) {
  return knex("cohorts").insert([
    { name: "Full Stack Web Dev 19" },
    { name: "Data Science 19" },
    { name: "Android 19" }
  ]);
};
