exports.seed = function(knex, Promise) {
  return knex("students").insert([
    { name: "Preston", cohort_id: 1 },
    { name: "Shannon", cohort_id: 2 },
    { name: "Mack", cohort_id: 3 }
  ]);
};
