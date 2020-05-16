const getDb = require('../util/database').getDB;

module.exports = class Article {
    // constructor(title, content) {
    //     this.title = title;
    //     this.content = content;
    // }

    //  save() {
    //      articles.push(this);
    //  }

    static fetchAll() {
        const db = getDb();
        return db.collection('Article')
        .find()
         .toArray()
        .then(articles => {
            console.log(articles);
            return articles;
        })
        .catch(err => {
            console.log(err);
        });
     }
}
