import express, { Request, Response } from "express";
import {User} from '../models/user' 
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../erros/request-validation-error";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be Valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).send(errors.array());
      throw new RequestValidationError(errors.array());
    }
    const {email} = req.body;
  }
);

export { router as signupRouter };
