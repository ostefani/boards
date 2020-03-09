import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Board from '../../../models/board';
import CustomError from '../../../customError';

const secret = process.env.SECRET;

export default async ({ boardInput: { title } }, context) => {
    console.log('context: ', context.user);
    console.log('boardTitle: ', title);
    try {
        const board = new Board({
            title,
        });
        console.log('board: ', board._doc);
        const result = await board.save();
        if (result) {
            return { ...board._doc };
        }
        throw new CustomError('Title has incorrect format', 'password', 'AuthUserError');
    }
    catch (e) {
        return e;
    }
};
