import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import session from 'express-session';
import usersController from "./controllers/users/users-controller.js";
import reviewsController from "./controllers/reviews/reviews-controller.js";
import favoriteController from "./controllers/favorite/favorite-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
//     || 'mongodb://localhost:27017/animeApp'

mongoose.connect('mongodb://localhost:27017/animeApp', options)
    .then(r => console.log('connected')); // url from mongodb

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())

usersController(app)
reviewsController(app)
favoriteController(app)

app.listen(process.env.PORT || 4000);