import jwt from 'jsonwebtoken';
import User from '../../../models/user';

const secret = process.env.SECRET;

export default async ({ token }, context) => {
    console.log('verify: ', context);
    if (!context.user) {
        throw Error('You are not authenticated')
    }
    try {
        const decoded = await jwt.verify(token, secret);
        const user = await User.findOne({ _id: decoded.id });
        return { token, password: null, ...user._doc };
    }
    catch (e) {
        return e;
    }
};
