import mongoose from "mongoose";

const favoriteSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    animeID: {type: String},
    animeName: String,
    animeImage: String
}, {collection: 'favorite'})

export default favoriteSchema;