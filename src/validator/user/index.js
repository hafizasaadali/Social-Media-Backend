import Joi from "joi";
const uservalidator = {
  create: (req, res, next) => {
    const userValidation = Joi.object({
      firstName: Joi.string().min(3),
      lastName: Joi.string().min(2),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });
    const response = userValidation.validate(req.body);
    if (response.error) {
      res.json({ message: "yaki na la" });
    }
    next();
  },
};

export default uservalidator;
