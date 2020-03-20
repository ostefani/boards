import User from '../../../models/user';
import Board from '../../../models/board';
import CustomError from '../../../customError';

export default async ({ boardIndex: { id } }, context) => {
    console.log('id: ', id);
    console.log('context: ', context);
    try {
        if (!context.user) {
            throw new CustomError('You are not authenticated', 'verification', 'AuthUserError');
        }
        const board = await Board.find({ _id: id });
        return [...board];
    }
    catch (e) {
        return e;
    }
};
