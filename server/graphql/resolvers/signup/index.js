import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../../../models/user';
import CustomError from '../../../customError';

const secret = process.env.SECRET;

const saltRounds = 10;

export default async ({ userInput: { username, email, password } }) => {
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

            user.save()
                .then(() => console.log('saved'))
                .catch(() => {
                    throw new Error('Error occurred, try again later');
                });
            const token = await jwt.sign({ id: user._id }, secret);
            return { token, password: null, ...user._doc };
        }
    }
    catch (e) {
        return e;
    }
};
