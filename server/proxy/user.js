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
export const getUserNum = () => {
    return new Promise((resolve, reject) => {
        console.log('getUserNum');
        let counter = 0;
        userModel
            .find({ user_id: { $gt: 0 } })
            .sort({ user_id: -1 })
            .then(
                ([first, ...others]) => {
                    if (first) {
                        counter = first.user_id;
                    }
                    resolve([null, counter]);
                },
                err => {
                    reject([err, null]);
                }
            );
    });
};
export const saveToken = (id, token) => {
    return new Promise((resolve, reject) => {
        console.log('saveToken');
        userModel.findById(id, async (err, doc) => {
            if (err) {
                reject(err);
            } else {
                doc.token.access_token = token;
                let userInfo = await doc.save();
                //console.log('userInfo=>', userInfo);
                resolve([null, userInfo]);
            }
        });
    }).catch(err => [err]);
};
