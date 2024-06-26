import mongoose from 'mongoose';

const chatSchema = mongoose.Schema(
  {
    isGroupChat:{
        type:Boolean,
        default:false
    },
    chatName: { type: String, trim: true },
    users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
      groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    
  })
  const Chat = mongoose.model('Chat', chatSchema);
  export default Chat