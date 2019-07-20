import jwt from 'jsonwebtoken';
import config from '../config';
export const generateToken = id => {
    return jwt.sign({ data: id }, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn
    });
};
