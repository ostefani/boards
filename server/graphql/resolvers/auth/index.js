import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../../../models/user';

dotenv.config();

const crypto = require('crypto');

const secret = process.env.SECRET;

export default {
    createUser: async function createUser(args) {
        console.log('args: ', args);
        try {
            const {
                email,
                password,
                // confirm,
            } = args.userInput;

            const existingUser = await User.findOne({ email });
            if (existingUser) {
                throw new Error('User already exists!');
            }
            const hashedPassword = crypto.createHmac('sha256', secret)
                .update(password)
                .digest('hex');

            const user = new User({
                email,
                password: hashedPassword,
            });
            user.save().then(() => console.log('saved'));

            // if user is registered without errors
            // create a token
            const token = jwt.sign({ password }, secret);

            return { token, ...user };
        }
        catch (e) {
            console.log(e);
        }
    },
};

/*export default async function createUser(args) {
    console.log('args: ', args);
    try {
        const {
            email,
            password,
            // confirm,
        } = args.userInput;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists!');
        }
        const hashedPassword = crypto.createHmac('sha256', secret)
            .update(password)
            .digest('hex');

        const user = new User({
            email,
            password: hashedPassword,
        });
        user.save().then(() => console.log('saved'));

        // if user is registered without errors
        // create a token
        const token = jwt.sign({ password }, secret);

        return { token, ...user };
    }
    catch (e) {
        console.log(e);
    }
}*/