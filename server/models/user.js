const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
import myConfig from '../config/myConfig';
//import config from '../config';
//timestamps自动生成和管理createTime和updateTime字段的值
const UserSchema = mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    openid: {
        type: String,
        trim: true
    },
    nickname: {
        type: String,
        required: true,
        trim: true,
        default: '昵称'
    },
    avatar: {
        type: String,
        required: true,
        default:
            'https://pwgyy.gz.bcebos.com/aa477801da1e4c189626d647d98d8949.png'
    },
    stype: {
        type: Number, //1猎人，0普通用户，2待审核
        default: 0
    },
    mobile: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    },
    lv_level: {
        type: Number,
        default: 0
    },
    sex: {
        type: Number,
        default: 1 //2为女，1为男_sta
    },
    region: {
        type: String,
        trim: true
    },
    birthday: {
        type: String,
        default: '1975-01-01'
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
        type: Number,
        default: 0
    },
    fans: {
        type: Number,
        default: 0
    },
    isBlack: {
        type: Number,
        default: 0
    },
    v_level: {
        type: Number,
        default: 0
    },
    pw_status: {
        type: Number
    },
    order_total: {
        type: Number,
        default: 0
    },
    discount_open: {
        type: Number,
        default: 0
    },
    discount: {
        type: String
    },
    discount_uptime: {
        type: Date,
        default: Date.now
    },
    online_time: {
        type: Number,
        default: 0
    },
    online_longAgo: {
        type: Number,
        default: 0
    },
    online_status: {
        type: Number, //0为下线，1为在线
        default: 0
    },
    isAuth: {
        type: Number, //身份认证 1 认证 2等待认证 0 未认证
        default: 0
    },
    photos: {
        type: Array,
        default: []
    },
    dynamic_img: {
        type: Array,
        default: []
    },
    discount_msg: {
        type: Array,
        default: []
    },
    token: {
        access_token: {
            type: String
        },
        expires_time: {
            type: Number
        },
        refresh_token: {
            type: String
        },
        refresh_expires_time: {
            type: Number
        },
        client: {
            appid: {
                type: String,
                default: 'web'
            },
            uid: {
                type: Number
            }
        }
    }
});
UserSchema.plugin(timestamp);
export default mongoose.model('User', UserSchema);
