const mongoose = require('mongoose');

const dataModel = new mongoose.Schema({
  task: {
    required: true,
    type: String
  },
  isCompleted: {
    required: true,
    type: Boolean
  }
})

module.exports = mongoose.model('Data', dataModel)