import jwt from 'jsonwebtoken';

const secret = process.env.SECRET;

export default () => ((req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1] || '';
        if (token) {
            try {
                const user = jwt.verify(token, secret);
                req.user = user;
            }
            catch (err) {
                return next(new Error(err));
            }
        }
    }
    return next();
});
