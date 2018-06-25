import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table
      .increments('id')
      .unsigned()
      .primary();

    table.string('name').notNullable();

    table.dateTime('created_at').notNullable();
    table.dateTime('updated_at').nullable();
    table.dateTime('deleted_at').nullable();
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('users');
}
