const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config/.env" });
const secretOrKey = process.env.secretOrKey;

exports.register = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;

  try {
    //For a unique email

    const searchResult = await User.findOne({ email });
    if (searchResult)
      return res.status(401).json({ msg: `User already exists !` });

    const newUser = new User({
      name,
      email,
      phoneNumber,
      password,
    });

    // const payload = {
    //   name,
    //   email,
    //   phoneNumber,
    // };

    // hash Password with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;

    // const token = await jwt.sign(payload, secretOrKey);

    await newUser.save();
    // res.status(201).json({ token: `Bearer ${token}`  , newUser},);
    res.status(201).json({ msg: "User addes Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ msg: `Wrong Email !!` });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(401).json({ msg: `Wrong Password !!` });

    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };

    const token = await jwt.sign(payload, secretOrKey);

    return res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};
