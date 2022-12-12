import mongoose from "mongoose";
import favoriteSchema from "./favorite-schema.js";

const favoriteModel = mongoose.model('FavoriteModel', favoriteSchema)

export default favoriteModel;