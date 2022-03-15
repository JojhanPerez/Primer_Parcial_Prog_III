const express = require('express')
const invoiceRouter = require("./invoiceRouter")

function routerApi(app) {
    const router = express.Router()
    app.use("/api/v1", router)
    router.use("/invoices", invoiceRouter)
}

module.exports = routerApi