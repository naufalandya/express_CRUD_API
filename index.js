const express = require("express");
const app = express();
const PORT = 3577;
const cors = require("cors");
const productRouters = require('./src/routes/products')
const connectionCORS = require('./src/config/cors')

app.use(cors())

app.use(express.json(connectionCORS));

app.use("/api/products", productRouters);

app.listen(PORT, ()=> {
    console.log(`Server Listening On ${PORT}`)
});