const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger");
const registerRoute = require("./routes/register");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(logger);

// Routes
app.use("/", registerRoute);

const PORT = 3001;
app.listen(PORT, () => {
  console.log('✅ Server running at http://localhost:${PORT}');
});