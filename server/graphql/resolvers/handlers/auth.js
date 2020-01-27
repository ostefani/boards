import jwt from 'jsonwebtoken';
import User from '../../../models/user';

const crypto = require('crypto');

const secret = process.env.SECRET;

export default async function createUser(args) {
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

        console.log(hashedPassword);

        const user = new User({
            email,
            password: hashedPassword,
        }, e => {
            if (e) throw e;
        });
        user.save();

        // if user is registered without errors
        // create a token
        const token = jwt.sign({ id: user._id }, secret, { algorithm: 'RS256' });

        return { token, password: null, ...user };
    }
    catch (e) {
        console.log(e.message);
    }
}
