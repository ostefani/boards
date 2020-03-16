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

export default mongoose.model('Task', boardSchema);
