import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Session'
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;