import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';
import User from '../../../models/user';

dotenv.config();

const secret = process.env.SECRET;

export default {
    login: async function createUser({ email, password }) {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('Email does not exist');
            }
        }
        catch (e) {
            return console.log(e);
        }
    },
};
