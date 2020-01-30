import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from '../../../models/user';

dotenv.config();

const secret = process.env.SECRET;

const saltRounds = 10;

const savePassword = async (password, email) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({
        email,
        password: hashedPassword,
    });
    user.save()
        .then(() => console.log('saved'))
        .catch(() => {
            throw new Error('Error occurred, try again later');
        });
    return user._doc;
};

export default async function createUser({ userInput: { email, password } }) {
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists!');
        }
        else {
            return savePassword(password, email)
                .then(user => {
                    const token = jwt.sign({ password }, secret);
                    return { token, password: null, ...user };
                })
                .catch(e => console.log(e));
        }
    }
    catch (e) {
        return console.log(e);
    }
};
