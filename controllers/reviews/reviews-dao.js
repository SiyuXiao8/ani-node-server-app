import reviewsModel from "./reviews-model.js";

export const createReview = async (review) =>
    await reviewsModel.create(review)

export const findReviewByAnime = async (anime) =>
    await reviewsModel
        .find({anime})
        .populate('author')
        .exec()

export const findReviewByUser = async (author) =>
    await reviewsModel
        .find({author})
        .populate('author')
        .exec()

export const findAllReviews = async () =>
    await reviewsModel.find()
        .populate('author')
        .exec()

export const deleteReview = async (id) =>
    await reviewsModel.deleteOne({_id:id})

export const deleteReviewByUser = async (uid) =>
    await reviewsModel.deleteMany({author: uid})
