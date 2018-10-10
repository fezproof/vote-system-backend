const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
});

const positionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  applicants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  }],
  votes: [voteSchema],
});

mongoose.model('Positions', positionSchema);
