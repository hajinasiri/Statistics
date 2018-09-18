
exports.up = function(knex, Promise) {
    return knex.schema.createTable('visits', (table) => {
    table.increments();
    table.integer('datetime').notNullable();
    table.bigInteger('user').notNullable();
    table.integer('os').notNullable();
    table.integer('device').notNullable();
    table.index('user','user');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('visits');
};
