import User from '../../../models/user';
import Board from '../../../models/board';
import CustomError from '../../../customError';

export default async ({ boardInput: { title } }, context) => {
    try {
        if (!context.user) {
            throw new CustomError('You are not authenticated', 'verification', 'AuthUserError');
        }
        const board = new Board({
            title,
            createdBy: context.user._id,
        });
        const result = await board.save();
        return { ...result._doc };
    }
    catch (e) {
        return e;
    }
};
