class ApiError extends Error{

    constructor(
        statusCode, 
        message = "SomeThing went worng",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.error = error
        this.success = false

        if (statck) {
            this.stack = statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }

    }

}

export {ApiError} 