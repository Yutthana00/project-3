const mongoose = require("mongoose");

// Check that Heroku makes mongodb available under this env variable
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/project-3";

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/Project3",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
