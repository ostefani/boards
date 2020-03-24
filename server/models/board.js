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
    description: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
        min: Date.now,
    },
});

const groupOfTasksSchema = new Schema({
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
    groupOfTasks: [groupOfTasksSchema],
    createdBy: {
        type: mongoose.ObjectId,
        ref: 'User',
    },
});

/*const boardsSchema = new Schema({
    createdBy: {
        type: mongoose.ObjectId,
        ref: 'User',
    },
    boards: [boardSchema],
});*/

export default mongoose.model('Board', boardSchema);
