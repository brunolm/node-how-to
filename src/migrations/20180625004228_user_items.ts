import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('user_items', (table) => {
    table
      .increments('id')
      .unsigned()
      .primary();

    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('cascade');
    table.string('name').notNullable();

    table.dateTime('created_at').notNullable();
    table.dateTime('updated_at').nullable();
    table.dateTime('deleted_at').nullable();
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('user_items');
}
