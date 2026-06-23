import { errorResponse } from "../utils/responseHandler.js";
import { STATUS_CODES } from "../config/constants.js";

const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || STATUS_CODES.INTERNAL_SERVER_ERROR;
    let message = err.message || "Internal Server Error";

    // Handle mongoose validation errors
    if (err.name === 'ValidationError') {
        statusCode = STATUS_CODES.BAD_REQUEST;
        message = Object.values(err.errors).map(val => val.message).join(', ');
    }

    // Handle duplicate key errors (e.g. unique email)
    if (err.code === 11000) {
        statusCode = STATUS_CODES.BAD_REQUEST;
        message = "Duplicate field value entered";
    }

    // In production, we might want to hide internal server errors
    if (process.env.NODE_ENV === 'production' && !err.isOperational) {
        message = "Something went wrong!";
    } else if (process.env.NODE_ENV !== 'production') {
        // Detailed log in development
        console.error(err);
    }

    return errorResponse(res, statusCode, message);
};

export default errorHandler;
