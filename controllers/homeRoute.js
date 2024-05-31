const router = require('express').Router();
const { Post, User } = require('../models')
const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/login"); 
  
  } else {
    next(); 
  }
};
router.get('/', async (req, res) => {
  
  try {
    const allPosts = await Post.findAll({
      include: [User]
    })
    const posts = allPosts.map((post) => post.get({ plain: true }))
console.log(posts)
    res.render('homepage', { posts , loggedIn: req.session.loggedIn}); 
  } catch (error) {
    console.error(error)
    res.status(500).json()
  }


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



router.get('/login', (req, res) => {
  
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;