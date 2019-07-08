import mongoose from 'mongoose'

const ServiceSchema = mongoose.Schema({
    user_id: {
        type: ObjectId
    },
    service_id: {
        type: Number
    },
    game_logo: {
        type: String
    },
    price: {
        type: Number
    },
    voice: {
        type: String
    },
    voice_length: {
        type: Number
    },
    game: {
        type: String
    },
    order_total: {
        type: Number
    },
    logo: {
        type: String
    },
    tags: {
        type: String
    }
})

export default mongoose.model('Service', ServiceSchema)
