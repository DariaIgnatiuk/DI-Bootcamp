const {db} = require('../config/data.js')

const _getAllPosts = () => {
    return db('posts').select('id', 'title', 'content').orderBy('id');
};

const _getPostById = (id) =>{
    return db('posts').where({'id':id});
}

const _createPost = (title, content) => {
    return db("posts").insert({ title, content }, ["id", "title", "content"]);
  };

const _updatePost = (a, b, c) => {
    return db("posts").update({ title:a, content:b }).where({'id':c});
};


const _deletePost = (id) => {
    return db("posts").delete().where({'id':id});
};

module.exports = {
    _getAllPosts,
    _getPostById,
    _createPost,
    _updatePost,
    _deletePost,
}