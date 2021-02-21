const express = require("express");

const connectDB = require("./config/dbConnect");

const user = require("./Routes/user");

const app = express();
//Parser
app.use(express.json());

//Routes
app.use(`/user`, user);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.log(error) : console.log(`Server is running on PORT ${PORT}`)
);
