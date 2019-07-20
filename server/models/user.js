const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment-fix');
const UserSchema = mongoose.Schema(
    {
        user_id: {
            type: Number,
            require: true,
            unique: true,
            default: 0
        },
        open_id: {
            type: String,
            default: 1111111111,
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
            type: Array,
            default: []
        },
        fans: {
            type: Array,
            default: []
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
        }
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        },
        toJSON: {
            virtuals: true,
            versionKey: false, //它的作用：并发修改文档时避免出现不可预知的错误
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.createdAt;
                delete ret.updatedAt;
            }
        },
        minimize: false //是否删掉为空的字段
    }
);

autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    field: 'user_id',
    startAt: 1,
    incrementBy: 1
});
mongoose.model('User', UserSchema);
