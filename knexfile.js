module.exports = {
  test: {
    client: "pg",
    version: "9.6",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "scorpions13",
      database: "barriga",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "src/migrations",
    },
  },
};
