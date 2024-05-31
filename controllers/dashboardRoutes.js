const router = require('express').Router();
const { Post, User } = require('../models')
const withAuth = require('../utils/authGuard')
router.get('/', withAuth, async (req, res) => {
  
  try {
    console.log("Test")
    const allPosts = await Post.findAll({
      where: {
        userId: req.session.user_id,
      }
    })
    const posts = allPosts.map((post) => post.get({ plain: true }))
console.log(posts)
    res.render('dashboard', posts ); 
  } catch (error) {
    console.error(error)
    res.status(500).json()
  }


});

router.get('/newpost', (req, res) => {
  res.render('newPost');
});

router.get('/post/:id', withAuth, async (req, res) => {
  
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    
    try {
      const postData = await Post.findByPk(req.params.id);

      const post = postData.get({ plain: true });

      res.render('comment', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

module.exports = router;