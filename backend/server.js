// import 'dotenv/config'
import express from "express"
import productRoutes from "./routers/products.routes.js"

const app = express()


app.use('/', productRoutes)

app.listen(2000, () => {
    console.log("server is running")
})