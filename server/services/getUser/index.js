import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/user';
import CustomError from '../../customError';

const secret = process.env.SECRET;

export default async ({ email, password }) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new CustomError('User is not found', 'email', 'AuthUserError');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = await jwt.sign({ ...user._doc, password: null }, secret);
            return { ...user._doc, password: null, token };
        }
        throw new CustomError('Password is incorrect', 'password', 'AuthUserError');
    }
    catch (e) {
        return e;
    }
};
