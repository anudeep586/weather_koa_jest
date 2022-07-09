import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('weather', (table: Knex.TableBuilder) => {
        table.uuid('id').primary().notNullable().unique();
        table.string('cityName').notNullable()
        table.string('country').notNullable();
        table.string('temp_c').notNullable();
        table.string('temp_f').notNullable();
        table.string('humidity').notNullable();
        table.string('wind_mph').notNullable();
      })
}


export async function down(knex: Knex): Promise<void> {
}

