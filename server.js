const express = require("express");
const app = express();
const { Sequelize, logger } = require("sequelize");

const sequelize = new Sequelize("learn", "postgres", "13112003", {
  host: "localhost",
  dialect: "postgres",
});

// const sequelize1 = new Sequelize("sqlite::memory:", {
//   // Choose one of the logging options
//   logging: console.log, // Default, displays the first parameter of the log function call
//   logging: (...msg) => console.log(msg), // Displays all log function call parameters
//   logging: false, // Disables logging
//   logging: (msg) => logger.debug(msg), // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
//   //   logging: logger.debug.bind(logger), // Alternative way to use custom logger, displays all messages
// });
async function ishla() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
ishla();

app.listen(3000, () => {
  console.log("3000 port listening ");
});
