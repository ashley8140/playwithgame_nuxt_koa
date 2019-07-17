import requireDirectory from 'require-directory';
import Router from 'koa-router';
import path from 'path';
import config from '../config';
import * as errors from './http-exception';
import mongoose from 'mongoose';
import { logger } from './logger';
class InitManager {
    static initCore(app) {
        InitManager.app = app;
        InitManager.loadConfig();
        InitManager.loadLogger();
        InitManager.loadHttpException();
        InitManager.initLoadRouters();
        //连接mongodb
        mongoose
            .connect(config.dbs, {
                poolSize: 20,
                useCreateIndex: true,
                useNewUrlParser: true //useNewUrlParser这个属性会在url里识别验证用户所需的db，未升级前是不需要指定的，升级到一定要指定，不管是在url后面，还是用authSource
            })
            .then(
                () => {},
                err => {
                    logger.error(
                        'connect to %s error: ',
                        config.db,
                        err.message
                    );
                    process.exit(1);
                }
            );
    }
    static initLoadRouters() {
        const apiDirectory = path.resolve(__dirname, '../api/v1');
        const modules = requireDirectory(module, apiDirectory, {
            visit: whenLoadModule
        });
        function whenLoadModule(obj) {
            if (obj.default instanceof Router) {
                InitManager.app.use(obj.default.routes());
            }
        }
    }
    static loadConfig() {
        global.config = config;
    }
    static loadHttpException() {
        global.ERRORS = errors;
    }
    static loadLogger() {
        global.logger = logger;
    }
}
export default InitManager;
