import knex from 'knex';
import configs from '../database/database.connection';

const config = configs['development'];

const db = knex(config);

export default db;