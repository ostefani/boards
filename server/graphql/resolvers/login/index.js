import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../../../models/user';

dotenv.config();

const secret = process.env.SECRET;

export default async ({ email, password }) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User is not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = await jwt.sign({ id: user._id }, secret);
            return { token, password: null, ...user._doc };
        }
        throw new Error('Password is incorrect');
    }
    catch (e) {
        return e;
    }
};
