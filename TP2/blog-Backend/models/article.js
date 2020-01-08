const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    Name: { type: String, required: true },
    URL: { type: String, required: true },
    description: { type: String, required: true },
    vote: { type: Number, required: true }
});

const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;