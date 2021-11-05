import { CustomError } from "./custom-error";

export class NotFoundErorr extends CustomError {
  statusCode = 404;
  constructor() {
    super("Router not Found");
    Object.setPrototypeOf(this, NotFoundErorr.prototype);
  }

  serializeErrors() {
    return [{ message: "Not Found" }];
  }
}
