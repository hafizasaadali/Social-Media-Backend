import Joi from "joi";
const commentsvalidator = {
  create: (req, res, next) => {
    const commentsValidation = Joi.object({
      description: Joi.string().min(3),
      UserId: Joi.required(),
      PostId: Joi.required(),
    });
    const response = commentsValidation.validate(req.body);
    if (response.error) {
      res.json({ message: "yaki na la" });
    }
    next();
  },
};

export default commentsvalidator;
