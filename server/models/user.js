import mongoose, { Schema } from 'mongoose';
import { isEmailValid, isUserNameValid } from '../validation';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: isUserNameValid,
            message: props => `${props.value} is not a valid username!`,
        },
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: isEmailValid,
            message: props => `${props.value} is not a valid email!`,
        },
    },
    password: {
        type: String,
        required: [true, 'Required fieled'],
        maxlength: [255, 'Too long string'],
    },
});

export default mongoose.model('User', userSchema);
