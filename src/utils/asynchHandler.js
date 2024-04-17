
const asynchHandler = (recustHandler) => {
    return async(req, res, next) =>  { 
        Promise.resolve( recustHandler(req, res, next))
        .catch((error)=>{next(error)})
    }
}

export {asynchHandler}