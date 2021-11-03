import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  // private is qualitvilant to writing  validationerro = this.validation.error
  constructor(public errors: ValidationError[]) {
    super();
    // only because we are exntending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
