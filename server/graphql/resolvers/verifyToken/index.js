import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../../../models/user';

dotenv.config();

const secret = process.env.SECRET;

const decodeToken = async token => {
    try {
        const decoded = await jwt.verify(token, secret);
        return decoded.id;
    }
    catch (e) {
        throw new Error(e.message);
    }
};

export default async function ({ token }) {
    return decodeToken(token)
        .then(id => (User.findOne({ _id: id })
            .then(user => ({ token, ...user._doc }))
            .catch(() => {
                throw new Error('The user is not found');
            })
        ))
        .catch(e => {
            throw new Error(e.message);
        });
}
