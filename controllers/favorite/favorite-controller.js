import * as favoriteDao from './favorite-dao.js';

const favoriteController = (app) => {
    const createLike = async (req, res) => {
        const like = req.body
        const currentUser = req.session['currentUser']
        like.user = currentUser._id
        const actualLike = await favoriteDao.createLike(like)
        res.json(actualLike)
    }

    const findLikeByAnime = async (req, res) => {
        const animeID = req.params.id
        const likes = await favoriteDao.findLikeByAnime(animeID)
        res.json(likes)
    }

    const findLikeByUser = async (req, res) => {
        const userID = req.params.id
        const likes = await favoriteDao.findLikeByUser(userID)
        res.json(likes)
    }

    const deleteLike = async (req, res) => {
        const likeID = req.params.id
        const status = await favoriteDao.deleteLike(likeID)
        res.json(likeID)
    }

    const deleteLikeByUser = async (req, res) => {
        const userID = req.params.uid
        const status = await favoriteDao.deleteLikeByUser(userID)
        res.send(userID)
    }

    app.get('/anime/:id/likes', findLikeByAnime)
    app.get('/user/:id/likes', findLikeByUser)
    app.delete('/likes/:id', deleteLike)
    app.delete('/user/:uid/likes', deleteLikeByUser)

    app.post('/likes', createLike)

}

export default favoriteController;