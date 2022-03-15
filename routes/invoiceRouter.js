const express = require('express')
const routes = express.Router()
const invoiceSchema = require("../models/invoices")
const invoicesJson= require('../invoices.json');

routes.get('/:referenceValue', (req, res) => {
    const { referenceValue } = req.params;
    invoiceSchema
            .findOne({ 'Line.ExpenseDetail.Customer.Ref.value': referenceValue })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))
});

routes.post('/invoice', (req, res) => {
    const invoice = invoiceSchema(req.body)
    invoice
        .save()
        .then((data) => { res.json(data) })
        .catch((error) => res.json({ message: error }))
})


routes.get("/", (req, res) => {
    invoiceSchema
        .find()
        .then((data) => { res.json(data) })
        .catch((error) => res.json({ message: error }))
})


routes.get("/:invoiceId", (req, res) => {
    const { invoiceId } = req.params
    invoiceSchema
        .findById(invoiceId)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

routes.put("/:invoiceId", (req, res) => {
    const { invoiceId } = req.params
    const { DueDate, DNi, Status, Line, Ventor, TotalAmt} = req.body
    invoiceSchema
        .updateOne(
            { _id: invoiceId },
            { $set: { DueDate, DNi, Status, Line, Ventor, TotalAmt } }
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

routes.delete("/:invoiceId", (req, res) => {
    const { invoiceId } = req.params
    invoiceSchema
        .remove({ _id: invoiceId })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


module.exports = routes