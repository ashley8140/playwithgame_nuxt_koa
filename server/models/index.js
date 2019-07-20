import { logger } from '../common/logger';
import config from '../config';
const mongoose = require('mongoose');
const requireAll = require('require-all');
const path = require('path');
const mongoUrl = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${
    config.mongodb.database
}`;

requireAll({
    dirname: path.join(__dirname, './')
});
mongoose.Promise = global.Promise; //加.exec()可以返回一个promise,但是exec返回的promise并非es6里面标准的promise
mongoose.connection
    .openUri(mongoUrl, {
        useNewUrlParser: true, //useNewUrlParser这个属性会在url里识别验证用户所需的db，未升级前是不需要指定的，升级到一定要指定，不管是在url后面，还是用authSource
        useCreateIndex: true,
        useFindAndModify: false,
        poolSize: 20,
        user: config.mongodb.user,
        pass: config.mongodb.pass
    })
    .on('error', err => {
        logger.error('connect to %s error: ', mongoUrl, err.message);
        process.exit(1);
    });
