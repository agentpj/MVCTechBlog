const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json({ message: 'No comment was created!' });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const getComment = await Comment.findAll({})
      .then(getComment = res.json(getComment))
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', withAuth, (req, res) => {
    try {
      const getCommentbyId = Comment.findAll(req.body, {
        where: { id: req.params.id, },
      } )
     .then(getComentbyId = res.json(getCommentbyId))
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;