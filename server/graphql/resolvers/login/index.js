import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from '../../../models/user';

dotenv.config();

const secret = process.env.SECRET;

const checkPassword = async (password, hash) => {
    try {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch;
    }
    catch (e) {
        throw new Error('Some error occurred');
    }
};

export default async function login({ email, password }) {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Email does not exist!');
        }
        return checkPassword(password, user.password)
            .then(isMatch => {
                if (isMatch) {
                    const token = jwt.sign({ password }, secret);
                    return { token, password: null, ...user._doc };
                }
                else throw new Error('Password is incorrect');
            })
            .catch(e => e);
    }
    catch (e) {
        return e;
    }
}
