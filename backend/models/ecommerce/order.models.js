import mongoose from 'mongoose'

//Either you can use this form, or use the array with obj inside , the below form is a tad bit more verbose
const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    }
})

const orderSchema = new mongoose.Schema(
    {
        orderState: {
            type: String,
            enum: ['PENDING', 'CANCELLED', "DELIVERED"],
            default: 'PENDING'
        },
        orderItems: {
            type: [orderItemsSchema]
        },
        orderPrice: {
            type: Number, 
            required: true
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        sendersAddress: {
            type: String,
            required: true,
        },
    },{timestamps: true})


export const Order = mongoose.model('Order', orderSchema)