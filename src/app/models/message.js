const Mongoose = require('../../database')
 
 const messageSchema = new Mongoose.Schema({
    
    timestamp: {
        type: Date,
        default: Date.now,
      },
    from: {
        type: String,
        required: true
      },
      to: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    conversa: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'BotRespostas'
    }]
    
});
 
messageSchema.method('transform', function() {
    let obj = this.toObject();
 
    //Rename fields
    obj.conversationId = obj._id;
    delete obj._id;
 
    return obj;
});
 
module.exports = Mongoose.model('message', messageSchema);