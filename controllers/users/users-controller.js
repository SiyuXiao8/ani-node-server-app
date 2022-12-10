import * as userDao from './users-dao.js';

const usersController = (app) => {
    const findAllUsers = async (req, res) => {
        const users = await userDao.findAllUsers()
        res.json(users)
    }

    const register = async (req, res) => {
        const user = req.body
        const existingUser = await userDao.findUserByUsername(user.username)
        if(existingUser){ // if username exist already send 403(forbidden)
            res.sendStatus(403)
            return
        }
        // username not exist, we then create that user in our db
        const currentUser = await userDao.createUser(user)
        req.session['currentUser'] = currentUser
        res.json(currentUser)
    }

    const login = async (req, res) => {
        const credentials = req.body
        const existingUser = await userDao.findUserByCredentials(credentials.username,credentials.password)
        if(!existingUser){ // does not have that user in db
            res.sendStatus(403)
            return
        } // found that user
        req.session['currentUser'] = existingUser
        res.json(existingUser)
    }

    const profile = async (req, res) => {
        if (req.session['currentUser']) {
            res.send(req.session['currentUser'])
        } else {
            res.sendStatus(403)
        }
    }

    const logout = (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }

    app.get('/users', findAllUsers)

    app.post('/register', register)
    app.post('/login', login)
    app.post('/logout', logout)
    app.post('/profile', profile)
}

export default usersController;