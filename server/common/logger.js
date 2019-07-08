import path from 'path';
import log4js from 'log4js';
import config from '../config';
log4js.configure({
    appenders: {
        //访问日志
        access: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log', //通过日期来生成文件
            alwaysIncludePattern: true, //文件名始终以日期区分
            encoding: 'utf-8',
            filename: path.join('logs/', 'access.log') //生成文件路径和文件名
        },
        //系统日志
        application: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log', //通过日期来生成文件
            alwaysIncludePattern: true, //文件名始终以日期区分
            encoding: 'utf-8',
            filename: path.join('logs/', 'application.log') //生成文件路径和文件名
        },
        console: {
            type: 'console'
        }
    },
    categories: {
        default: { appenders: ['console'], level: 'info' },
        access: { appenders: ['access'], level: 'info' },
        application: { appenders: ['application'], level: 'warn' }
    }
});
//trace(蓝色)、debug(青色)、info(绿色)、warn(黄色)、error(红色)、fatal(粉色)
const accessLogger = log4js.getLogger('access');
if (config.debug) {
    accessLogger.level = 'debug';
}
const logger = log4js.getLogger('application'); //记录所有应用级别的日志
if (config.debug) {
    logger.level = 'debug';
}
export default { accessLogger, logger };
