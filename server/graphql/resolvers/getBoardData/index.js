import User from '../../../models/user';
import Board from '../../../models/board';
import CustomError from '../../../customError';

export default async ({ id }, context) => {
    try {
        if (!context.user) {
            throw new CustomError('You are not authenticated', 'verification', 'AuthUserError');
        }
        const board = await Board.find({ _id: id });
        console.log('board: ', board);
        return { ...board };
    }
    catch (e) {
        return e;
    }
};
