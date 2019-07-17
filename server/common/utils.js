import jwt from 'jsonwebtoken';
import myConfig from '../config/myConfig';
import path from 'path';
import fs from 'fs';
export const generateToken = id => {
    console.log('output: id', id);

    let cert = fs.readFileSync(path.resolve(__dirname, '../config/jwt.pem'));
    return jwt.sign({ data: id }, cert, {
        expiresIn: myConfig.security.expiresIn,
        algorithm: 'RS256'
    });
};
