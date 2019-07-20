import requireDirectory from 'require-directory';
import Router from 'koa-router';
import path from 'path';
import * as errors from './http-exception';
import { logger } from './logger';

class InitManager {
    static initCore(app) {
        InitManager.app = app;
        InitManager.loadLogger();
        InitManager.loadHttpException();
        InitManager.initLoadRouters();
    }
    static initLoadRouters() {
        const apiDirectory = path.resolve(__dirname, '../routes');
        const modules = requireDirectory(module, apiDirectory, {
            visit: whenLoadModule
        });
        function whenLoadModule(obj) {
            if (obj.default instanceof Router) {
                InitManager.app.use(obj.default.routes());
            }
        }
    }

    static loadHttpException() {
        global.ERRORS = errors;
    }
    static loadLogger() {
        global.logger = logger;
    }
}
export default InitManager;
