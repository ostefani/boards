import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../../../models/user';

dotenv.config();

const secret = process.env.SECRET;

export default async ({ token }) => {
    try {
        const decoded = await jwt.verify(token, secret);
        const user = await User.findOne({ _id: decoded.id });
        return { token, password: null, ...user._doc };
    }
    catch (e) {
        return e;
    }
}
