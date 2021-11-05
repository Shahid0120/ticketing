// abstarct class creation for ensuring all erorrs are the same
// and stadarised, double checking before being sent to the
// error handlers.ts middleware
export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
