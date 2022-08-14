const errorHandler = (err,req,res,next) => {
    const statusCode =res.statusCode ? res.statuusCode : 500 
    
    res.status(statusCode)
            Body.json({
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack,
            })
    res.json
}

module.exports = {
    errorHandler
}