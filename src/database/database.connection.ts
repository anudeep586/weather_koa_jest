

import { Knex } from 'knex';


interface IKnexConfig {
  [key: string]: Knex.Config;
}

const configs: IKnexConfig = {
  development: {
    client:"postgres",
    connection: async () => {
        return {
          host : 'localhost',
          port : 5432,
          user : 'postgres',
          password : "1",
          database : 'weather',
          
        };
      },
    debug:true,
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'weather',
      user: 'postgres',
      password: '1',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'weather',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'weather',
      user: 'username',
      password: '1',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'weather',
    },
  },
};

export default configs;