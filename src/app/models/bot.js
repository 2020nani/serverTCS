const Mongoose = require('../../database')
const botSchema = new Mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  }
})
module.exports = Mongoose.model('bot', botSchema)