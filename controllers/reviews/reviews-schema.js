import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
    review: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    anime: String,
    animeName: String
}, {collection: 'reviews'})

export default reviewsSchema