const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

//user is associated to blog post via blog's user_id.  So if the user is deleted, the associated
// blog should be deleted
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// blog is associated to comment via a comment's blog_id.  Hence, if the blog is deleted,
// the associated comment should be deleted
Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog, Comment };
