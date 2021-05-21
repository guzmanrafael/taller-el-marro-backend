if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.PORT,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
  database_url:
    process.env.DATABASE_URL ||
    "postgres://{username}:{password}@localhost:5432/{dbname}",
};
