
import mongoose from "mongoose";

/* Entidades ou tabelas que serão criadas no banco de dados do MongoDb */

export const tbUser = mongoose.model('tbUser', {
    id: Number || null,
    name: String,
    email: String,
    password: String,
    firstAccess: Boolean,
    createdDate: Date,
    updateDate: Date,
    isActive: Boolean
});