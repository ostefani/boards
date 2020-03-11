import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../../models/user';
import Board from '../../../models/board';
import CustomError from '../../../customError';

const secret = process.env.SECRET;

export default async (_, context) => {
    try {
        const boards = await Board.find({ createdBy: context.user._id });
        if (boards) {
            return [...boards];
        }
        throw new CustomError('Title has incorrect format', 'password', 'AuthUserError');
    }
    catch (e) {
        return e;
    }
};
