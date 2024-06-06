import mongoose from 'mongoose'

const medicalRecordSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        diseases: {
            type: String,
            required: true,
        },
        medication: {
            type: String,
            required: true,
        },
        result: {
            type: String,
            required: true,
        }
    },{timestamps:true})

export const Record = mongoose.model('Record', medicalRecordSchema)