exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('planets', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('milesFromSun');
      table.text('climate');
      table.string('sunRevolution');
      table.string('atmosphere');
      table.string('moons');
      table.text('description');
      table.string('travelTime');
      table.string('diameter');
      table.string('gravity');
      table.string('averageTemp');
      table.string('dayLength');
      table.string('image');
      table.string('namesake');
      table.string('discovery');
      table.text('successfulMissions');
      table.string('image2');
      table.string('cutout');
      table.timestamps(true, true)
    }),

    knex.schema.createTable('moons', function(table) {
      table.increments('id').primary();
      table.string('moon');
      table.integer('planetId').unsigned();
      table.foreign('planetId')
        .references('planets.id')
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('moons'),
    knex.schema.dropTable('planets')
  ])
};
