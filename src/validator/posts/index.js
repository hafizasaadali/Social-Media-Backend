import Joi from "joi";
const postsvalidator = {
  create: (req, res, next) => {
    const postsValidation = Joi.object({   title: Joi.string().min(3),
      description: Joi.string().min(3),
      UserId: Joi.required(),
    });
    const response = postsValidation.validate(req.body);
    if (response.error) {
      res.json({ message: "yaki na la" });
    }
    next();
  },
};

export default postsvalidator;
