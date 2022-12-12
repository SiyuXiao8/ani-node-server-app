import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: String,
    address: String,
    firstName: String,
    lastName: String,
    role: {type: String, enum:['ADMIN', 'SECURITY', 'NORMAL']}
}, {collection: 'users'});

export default usersSchema;