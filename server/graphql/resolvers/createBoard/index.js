import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../../models/user';
import Board from '../../../models/board';
import CustomError from '../../../customError';

const secret = process.env.SECRET;

export default async ({ boardInput: { title } }, context) => {
    console.log('context: ', context.user);
    console.log('boardTitle: ', title);
    try {
        const board = new Board({
            title,
            createdBy: context.user._id,
        });
        const result = await board.save();
        if (result) {
            console.log('result: ', result._doc);
            // const user = await User.findOne({ _id: context.user._id });
            //const user = await User.updateOne({ _id: context.user._id }, { $set: {  } })
            //console.log('user: ', user);
            return { ...result._doc };
        }
        throw new CustomError('Title has incorrect format', 'password', 'AuthUserError');
    }
    catch (e) {
        return e;
    }
};
