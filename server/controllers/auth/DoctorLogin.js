import { RefreshToken, Doctor } from "../../models";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import JwtService from "../../services/JwtService";
import Joi from "joi";
import bcrypt from "bcrypt";
import { REFRESH_SECRET } from "../../config";

const doctorLoginController = {
  async login(req, res, next) {
    // validate the doctor
    const loginSchema = Joi.object().keys({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net", "in"] },
        })
        .required(),

      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .messages({
          "string.pattern.base": `Password should be between 3 to 30 characters and contain letters or numbers only`,
          "string.empty": `Password cannot be empty`,
          "any.required": `Password is required`,
        }),
    });
    let success = false;
    const { error } = loginSchema.validate(req.body);
    console.log(req.body);
    if (error) {
      return next(error);
    }

    try {
      const doctor = await Doctor.findOne({ email: req.body.email });

      // if doctor does not exist
      if (!doctor) {
        return next(CustomErrorHandler.wrongCredentials());
      }

      // match password
      const match = await bcrypt.compare(req.body.password, doctor.password);
      if (!match) {
        return next(
          CustomErrorHandler.wrongCredentials(
            "wrong password! please try again"
          )
        );
      }

      // JWT Token
      const access_token = JwtService.sign({
        _id: doctor._id,
        role: doctor.role,
      });
      // [ ] generate refresh jwt token
      const refresh_token = JwtService.sign(
        { _id: doctor._id, role: doctor.role },
        "1y",
        REFRESH_SECRET
      );
      // database whitelist
      await RefreshToken.create({ token: refresh_token });

      success = true;
      res.json({ success, access_token, refresh_token });
    } catch (err) {
      return next(err);
    }
  },
};

export default doctorLoginController;
