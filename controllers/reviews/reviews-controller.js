import * as reviewDao from './reviews-dao.js';

const reviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const currentUser = req.session['currentUser']
        review.author = currentUser._id
        const actualReview = await reviewDao.createReview(review)
        res.json(actualReview)
    }

    const findReviewByAnime = async (req, res) => {
        const animeID = req.params.animeID
        const reviews = await reviewDao.findReviewByAnime(animeID)
        res.json(reviews)
    }

    const findReviewByUser = async (req, res) => {
        const userID = req.params.userID
        const reviews = await reviewDao.findReviewByUser(userID)
        res.json(reviews)
    }

    const findAllReviews = async (req, res) => {
        const reviews = await reviewDao.findAllReviews()
        res.json(reviews)
    }

    const deleteReview = async (req, res) => {
        const animeID = req.params.id
        const status = await reviewDao.deleteReview(animeID)
        res.json(animeID)
    }

    const deleteReviewByUser = async (req,res) => {
        const userID = req.params.uid
        const status = await reviewDao.deleteReviewByUser(userID)
        res.send(userID)
    }

    app.get('/anime/:animeID/reviews', findReviewByAnime)
    app.get('/user/:userID/reviews', findReviewByUser)
    app.get('/reviews', findAllReviews)
    app.delete('/reviews/:id', deleteReview)
    app.delete('/user/:uid/reviews', deleteReviewByUser)

    app.post('/reviews', createReview)
}

export default reviewsController;