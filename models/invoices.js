const mongoose = require('mongoose')
const invoiceSchema = mongoose.Schema({
    DueDate: {
        type: String,
        require: true
    },
    DNI: {
        type: String,
        require: true
    },
    Status: {
        type: String,
        require: true
    },
    Line: {
        type: Object,
        require: true,
        Amount: {
            type: Number,
            require: true
        },
        DetailType: {
            type: String,
            require: true
        },
        ExpenseDetail: {
            type: Object,
            require: true,
            Customer: {
                type: Object,
                require: true,
                value: {
                    type: String,
                    require: true
                },
                name: {
                    type: String,
                    require: true
                },
                ref: {
                    type: Object,
                    require: true,
                    value: {
                        type: String,
                        require: true
                    },
                    name: {
                        type: String,
                        require: true
                    }
                }
            },
            Account: {
                type: Object,
                require: true,
                value: {
                    type: String,
                    require: true
                },
                name: {
                    type: String,
                    require: true
                }
            },
            LineStatus: {
                type: String,
                require: true
            }
        }
    },
    Ventor: {
        type: Object,
        require: true,
        value: {
            type: String,
            name: String
        }
    },
    TotalAmt: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('InvoiceDocument', invoiceSchema)