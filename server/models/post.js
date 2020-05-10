const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    description: String
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
