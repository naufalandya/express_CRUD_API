const allowedOrigins = ["http://localhost:5173", "http://localhost:5765"];


const corsOption = {
    origin : allowedOrigins,
    optionsSuccessStatus : 200,
}

module.exports = corsOption;