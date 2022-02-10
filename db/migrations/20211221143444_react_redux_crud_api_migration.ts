import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').notNullable().primary()
    table.timestamps(true, true)
    table.string('name', 250).notNullable()
    table.string('username', 250).notNullable()
    table.string('email', 250).notNullable()
    table.string('city', 250).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}
