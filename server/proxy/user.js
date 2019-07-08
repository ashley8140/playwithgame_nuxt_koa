import userModel from '../models/user';
export const getUserByMobile = mobile => {
    return new Promise((resolve, reject) => {
        console.log('getUserByMobile');
        userModel.findOne({ mobile: mobile }, (err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve([err, user]);
            }
        });
    }).catch(err => [err]);
};
export const createNewUser = userInfo => {
    return new Promise((resolve, reject) => {
        console.log('createNewUser');
        userModel.create(userInfo, (err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve([err, user]);
            }
        });
    }).catch(err => [err]);
};
