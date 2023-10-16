export class ControllerError extends Error {
    constructor(errorMessage, code) {
        super(errorMessage);
        this.errorMessage = errorMessage;
        this.code = code;
    }
}
