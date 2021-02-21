const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check(`name`, `This field is required!`).notEmpty(),
  check(`email`, `This field should be valid email`).isEmail(),
  check(`email`, `This field is required`).notEmpty(),
  check(`password`, `This field should be at least 4 char !`).isLength({
    min: 4,
  }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
