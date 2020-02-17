import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import CustomError from '../../../customError';
import User from '../../../models/user';

const secret = process.env.SECRET;

export default async ({ email, password }) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new CustomError('User is not found', 'email', 'AuthUserError');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = await jwt.sign({ id: user._id }, secret);
            return { token, password: null, ...user._doc };
        }
        throw new CustomError('Password is incorrect', 'password', 'AuthUserError');
    }
    catch (e) {
        return e;
    }
};
