import mongoose from 'mongoose'

const { Schema } = mongoose
const userSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
})

export default mongoose.model('User', userSchema)