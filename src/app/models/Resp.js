const Mongoose = require('../../database')
 
 const bootRespSchema = new Mongoose.Schema({
    
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
    message: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'message',
        require: true,
    },
    completed: {
        type: Boolean,
        require: true,
        default: false,
    }
    
});
 
bootRespSchema.method('transform', function() {
    let obj = this.toObject();
 
    //Rename fields
    obj.conversationId = obj._id;
    delete obj._id;
 
    return obj;
});
 
module.exports = Mongoose.model('BotRespostas', bootRespSchema);