import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../../../models/user';

dotenv.config();

const secret = process.env.SECRET;

const checkPassword = async (password, hash) => {
    try {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch;
    }
    catch (e) {
        return e;
    }
};

const getToken = async id => {
    try {
        const token = await jwt.sign(id, secret);
        if (token) {
            return token;
        }
        throw new Error('Some error occurred, try again later');
    }
    catch (e) {
        throw new Error(e.message);
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
                    return getToken({ id: user._id })
                        .then(token => ({ token, password: null, ...user._doc }));
                }
                throw new Error('Password is incorrect');
            })
            .catch(e => e);
    }
    catch (e) {
        return e;
    }
}
