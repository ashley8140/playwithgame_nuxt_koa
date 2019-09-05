import jwt from 'jsonwebtoken'
import config from '../config'
export const generateToken = _id => {
    return jwt.sign({ data: _id }, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn
    })
}
