import mongoose, { Schema } from 'mongoose';
import { isTitleValid } from '../validation';

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: isTitleValid,
            message: props => `${props.value} is not a valid title!`,
        },
    },
});

const boardSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: isTitleValid,
            message: props => `${props.value} is not a valid title!`,
        },
    },
    tasks: [taskSchema],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

export default mongoose.model('Board', boardSchema);
