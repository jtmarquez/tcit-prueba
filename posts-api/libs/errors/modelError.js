export class ModelError extends Error {
    constructor(errorMessage, errorTrace) {
        super(errorMessage);
        this.errorMessage = errorMessage;
        this.errorTrace = errorTrace;
    }
}