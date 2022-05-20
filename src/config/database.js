module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    host: 'localhost',
    port: parseInt(process.env.DB_PORT || "5432", 10),
    dialect: 'postgres',
    retry: {
      max: 3
    }
  }
}
