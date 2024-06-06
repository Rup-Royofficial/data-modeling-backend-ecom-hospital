import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        description: {
            required: true,
            type: String,
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        stock: {
            type: Number,
            required: true,
            default: 0
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }
    },{timestamps: true})


export const Product = mongoose.model('Product', productSchema)