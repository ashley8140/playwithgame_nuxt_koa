import mongoose from 'mongoose'

const GiftSchema = mongoose.Schema({
    user_id: {
        type: Number
    },
    id: {
        type: Number
    },
    type: {
        type: Number
    },
    giftname: {
        type: String
    },
    need_diamond: {
        type: Number
    },
    gifticon: {
        type: String
    },
    addtime: {
        type: Date,
        default: Date.now
    },
    sid: {
        type: Number
    },
    sort: {
        type: Number
    }
})

export default mongoose.model('gift', GiftSchema)
