const router = require('express').Router();
let Article = require('../models/article');
router.route('/').get((req, res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) => {
    Article.findById(req.body.id)
        .then(article => {
            article.Name = req.body.Name;
            article.URL = req.body.URL;
            article.description = req.body.description;
            article.vote = Number(req.body.vote);

            article.save()
                .then(() => res.json('Article updated!'))
                .catch(err => res.status(400).json('Error1: ' + err));
        })
        .catch(err => res.status(400).json('Error2: ' + err));
});

router.route('/add').post((req, res) => {
    const Name = req.body.Name;
    const URL = req.body.URL;
    const description = req.body.description;
    const vote = Number(req.body.vote);

    const newArticle = new Article({
        Name,
        URL,
        description,
        vote,
    });
    newArticle.save()
        .then(() => res.json('Article added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;