import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    user_id: {
        type: Number
    },
    openid: {
        type: String
    },
    nickname: {
        type: String
    },
    avatar: {
        type: String
    },
    stype: {
        type: Number
    },
    mobile: {
        type: String
    },
    balance: {
        type: String,
        default: 0
    },
    lv_level: {
        type: Number
    },
    sex: {
        type: Number,
        default: 0
    },
    region: {
        type: String
    },
    birthday: {
        type: String
    },
    star_sign: {
        type: String
    },
    introduce: {
        type: String
    },
    professional: {
        type: String
    },
    interest: {
        type: String
    },
    follow: {
        type: Number
    },
    fans: {
        type: Number
    },
    isblack: {
        type: Number
    },
    v_level: {
        type: Number
    },
    pw_status: {
        type: Number
    },
    order_total: {
        type: Number
    },
    discount_open: {
        type: Number
    },
    discount: {
        type: String
    },
    discount_uptime: {
        type: Date,
        default: Date.now
    },
    online_time: {
        type: Number
    },
    online_longago: {
        type: Number
    },
    isauth: {
        type: Number
    },
    photos: {
        type: Array
    },
    dynamic_img: {
        type: Array
    },
    discount_msg: {
        type: Array
    }
});
export default mongoose.model('User', UserSchema);
