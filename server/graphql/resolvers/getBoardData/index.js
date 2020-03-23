import Board from '../../../models/board';
import CustomError from '../../../customError';

export default async ({ id }, context) => {
    try {
        if (!context.user) {
            throw new CustomError('You are not authenticated', 'verification', 'AuthUserError');
        }
        const board = await Board.findOne({ _id: id });
        return { ...board._doc, createdBy: null };
    }
    catch (e) {
        return e;
    }
};
