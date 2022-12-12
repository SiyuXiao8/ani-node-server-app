import favoriteModel from "./favorite-model.js";

export const createLike = async (like) =>
    await favoriteModel.create(like)

export const findLikeByAnime = async (animeID) =>
    await favoriteModel
        .find({animeID})
        .populate('user')
        .exec()

export const findLikeByUser = async (user) =>
    await favoriteModel
        .find({user})
        .populate('user')
        .exec()

export const deleteLike = async (id) =>
    await favoriteModel.deleteOne({_id:id})

export const deleteLikeByUser = async (uid) => {
    await favoriteModel.deleteMany({user:uid})
}