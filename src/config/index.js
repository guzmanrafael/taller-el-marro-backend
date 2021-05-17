if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.PORT,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  DB: {
    username: "rafaelguzman",
    password: "rafael123",
    database: "testtaller",
    host: "localhost",
    dialect: "postgres",
    logging: false,
  },
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH: process.env.JWT_REFRESH,
};
