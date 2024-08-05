import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import session from 'express-session'
import usersController from './controllers/users/users-controller.js'
import reviewsController from './controllers/reviews/reviews-controller.js'
import favoriteController from './controllers/favorite/favorite-controller.js'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false,
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
  family: 4,
}

// store this in a env file
const CONNECTION_STRING =
  'mongodb+srv://siyuxiao:siyuxiao@cluster0.o47wv2i.mongodb.net/animeApp?retryWrites=true&w=majority'

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
//     || 'mongodb://localhost:27017/animeApp'
mongoose.set('strictQuery', true)
mongoose
  .connect(CONNECTION_STRING, options)
  .then((r) => console.log(`connected mongoose`)) // url from mongodb

const app = express()
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
)

app.use(
  session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
)
app.use(express.json())

usersController(app)
reviewsController(app)
favoriteController(app)
const PORT = 4000
// app.listen(4000)
app.listen(PORT, function (err) {
  if (err) console.log('Error in server setup')
  console.log('Server listening on Port', PORT)
})
