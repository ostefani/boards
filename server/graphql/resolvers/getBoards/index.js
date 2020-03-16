import User from '../../../models/user';
import Board from '../../../models/board';
import CustomError from '../../../customError';

export default async (_, context) => {
    try {
        if (!context.user) {
            throw new CustomError('You are not authenticated', 'verification', 'AuthUserError');
        }
        const boards = await Board.find({ createdBy: context.user._id });
        return [...boards];
    }
    catch (e) {
        return e;
    }
};
