import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Board from '../../../models/board';
import CustomError from '../../../customError';

const secret = process.env.SECRET;

export default async (_, context) => {
    console.log('context: ', context.user);
    console.log('boardTitle: ', _);
    try {
        const board = new Board({
            title: _.boardInput.title,
        });
        const result = await board.save();
        if (result) {
            console.log('result: ', result);
        }
        throw new CustomError('Title has incorrect format', 'password', 'AuthUserError');
    }
    catch (e) {
        return e;
    }
};
