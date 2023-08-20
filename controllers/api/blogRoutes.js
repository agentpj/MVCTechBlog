const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

console.log("inside blog Routes");
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: 'No blog was created!' });
  }
});

router.put('/:id', withAuth, (req, res) => {
  try {
    const updateBlog = Blog.update(req.body, {
      where: { id: req.session.user_id, },
    } )
    res.status(200).json(updateBlog);
  } catch (err) {
    res.status(400).json({ message: 'No blog was updated!' });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
