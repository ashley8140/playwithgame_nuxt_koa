import mongoose from 'mongoose';
import { accessLogger } from '../common/logger';
import config from '../config';

if (config.debug) {
    const trace = (method, info, query) => {
        return (err, re, time) => {
            if (err) {
                accessLogger.error('trace error: ', err);
            }
            let infos = [];
            infos.push(query._collection.collection.name + '.' + method.blue);
            infos.push(JSON.stringify(info));
            infos.push((time + 'ms').green);
            accessLogger.debug('MONGO'.magenta, infos.join(' '));
        };
    };
    mongoose.Mongoose.prototype.mquery.setGlobalTraceFunction(trace);
}
