import Joi from "joi";

const doctorValidator = Joi.object().keys({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "in"] },
    })
    .required(),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{7,30}$"))
    .required()
    .messages({
      "string.pattern.base": `Password should be between 3 to 30 characters and contain letters or numbers only`,
      "string.empty": `Password cannot be empty`,
      "any.required": `Password is required`,
    }),
  confirm_password: Joi.any().valid(Joi.ref("password")).required().messages({
    "any.only": "Password does not match",
  }),
  role: Joi.string(),
  category: Joi.string().required(),
  awards: Joi.string(),
  certificates: Joi.string(),
  description: Joi.string().required(),
  education: Joi.string().required(),
  office_location: Joi.string().required(),
  npi: Joi.string().required(),
  lat: Joi.string().required(),
  lng: Joi.string().required(),
  phone: Joi.number().required(),
  hours: Joi.object()
    .keys({
      open_time: Joi.number().required(),
      close_time: Joi.number().required(),
    })
    .required(),
});

export default doctorValidator;
