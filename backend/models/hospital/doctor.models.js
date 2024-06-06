import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        qualification: {
            type: String,
            required: true,
        },
        workHours: {
            type: Number,
            required: true,
            default: 0
        },
        worksInHospital: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Hospital'
            }
        ]
    },{timestamps:true})

export const Doctor = mongoose.model('Doctor', doctorSchema)