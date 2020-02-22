import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/user';
import CustomError from '../../customError';

const secret = process.env.SECRET;

const saltRounds = 10;

const TYPES = ['email', 'username', 'password'];

export default async ({ email, username, password }) => {
    try {
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            throw new CustomError('User already exists!', 'email', 'AuthUserError');
        }
        else {
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                throw new CustomError('Username already exists!', 'username', 'AuthUserError');
            }
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const user = new User({
                username,
                email,
                password: hashedPassword,
            });
            try {
                const result = await user.save();
                if (result) {
                    const token = await jwt.sign({ ...user._doc, password: null }, secret);
                    return { ...user._doc, password: null, token };
                }
            }
            catch (e) {
                const type = TYPES.find(t => e.errors[t].path === t);
                if (type) {
                    throw new CustomError(
                        String(e.errors[type].message), String(type), 'ValidationError',
                    );
                }
                else {
                    return e;
                }
            }
        }
    }
    catch (e) {
        return e;
    }
};
