import Joi from '@hapi/joi';
import CustomError from '../customError';

export const LoginShema = Joi.object().keys({
    email: Joi
        .string()
        .trim()
        .required()
        // .email({ minDomainSegments: 1, tlds: { allow: ['com', 'net'] } })
        .pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)
        .error(new CustomError('Invalid email format.', 'email', 'AuthUserError'))
        .options({
            skipFunctions: true,
            stripUnknown: true,
        }),

    password: Joi
        .string()
        .trim()
        .required()
        .pattern(/^[a-zA-Z0-9]{3,16}$/)
        .error(new CustomError('Invalid password format', 'password', 'AuthUserError'))
        .options({
            skipFunctions: true,
            stripUnknown: true,
        }),
});
export const SignupShema = Joi.object().keys({
    username: Joi
        .string()
        .required()
        .pattern(new RegExp('/^[a-zA-Z]\w{2,7}$/')),

    email: Joi
        .string()
        .trim()
        .required()
        // .email({ minDomainSegments: 1, tlds: { allow: ['com', 'net'] } })
        .pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)
        .error(new CustomError('Invalid email format.', 'email', 'AuthUserError'))
        .options({
            skipFunctions: true,
            stripUnknown: true,
        }),

    password: Joi
        .string()
        .trim()
        .required()
        .pattern(/^[a-zA-Z0-9]{3,16}$/)
        .error(new CustomError('Invalid password format', 'password', 'AuthUserError'))
        .options({
            skipFunctions: true,
            stripUnknown: true,
        }),
});
