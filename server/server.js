const express = require("express");

const connectDB = require("./config/dbConnect");

const user = require("./Routes/user");

const app = express();
//Parser
app.use(express.json());

connectDB();

//Routes
app.use(`/user`, user);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.log(error) : console.log(`Server is running on PORT ${PORT}`)
);
