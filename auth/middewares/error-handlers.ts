import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../src/erros/request-validation-error";
import { DatabaseConnectionError } from "../src/erros/database-connection-error";
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    // object of errors(array) [errors{}]
    const formateddErrors = err.errors.map((error) => {
      return { meesage: error.msg, field: error.param };
    });
    return res.status(400).send({ errors: formateddErrors });
  }
  if (err instanceof DatabaseConnectionError) {
    return res.status(500).send({ errors: [{ message: err.reason }] });
  }
  res.status(400).send({
    message: err.message,
  });
};
