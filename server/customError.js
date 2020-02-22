export default function CustomError(message, type, name) {
    this.message = message;
    this.type = type;
    this.name = name;
    // Without passing CustomError to captureStackTrace, the CustomError
    // frame would show up in the .stack property. By passing
    // the constructor, we omit that frame, and retain all frames below it.
    Error.captureStackTrace(this, CustomError);
}
CustomError.prototype = Object.create(Error.prototype);
CustomError.prototype.constructor = CustomError;
