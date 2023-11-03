import Joi from "joi";

const doctorUpdateValidator = Joi.object().keys({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "in"] },
  }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{7,30}$")).messages({
    "string.pattern.base": `Password should be between 3 to 30 characters and contain letters or numbers only`,
    "string.empty": `Password cannot be empty`,
    "any.required": `Password is required`,
  }),
  confirm_password: Joi.any().valid(Joi.ref("password")).messages({
    "any.only": "Password does not match",
  }),
  role: Joi.string(),
  category: Joi.string(),
  awards: Joi.string(),
  certificates: Joi.string(),
  description: Joi.string(),
  education: Joi.string(),
  office_location: Joi.string(),
  npi: Joi.string(),
  lat: Joi.number(),
  lng: Joi.number(),
  phone: Joi.number(),
  hours: Joi.object().keys({
    open_time: Joi.number(),
    close_time: Joi.number(),
  }),
});

export default doctorUpdateValidator;
