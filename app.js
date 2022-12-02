import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";

mongoose.connect(url); // url from mongodb

const app = express();
app.use(cors())
app.use(express.json())

// userController(app)
// animeController(app)

app.listen(4000);