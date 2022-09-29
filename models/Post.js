const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  // !new
  bread: {
    type: String,
    require: true,
  },
  // !new
  ingredients: {
    type: [String],
    require: true,
  },
  // !new
  directions: {
    type: [String],
    require: true,
  },
  // !new
  tips: {
    type: [String],
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  // caption: {
  //   type: String,
  //   required: true,
  // },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
