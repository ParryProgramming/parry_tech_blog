const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', async (req, res) => {
    
    try {
      const post = await postData.findAll({
        include: [{ model: userData }]
      });
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const post = await Category.findByPk(req.params.id, {
        include: [{ model: userData }],
      });
  
      
      if (!post) {
        res.status(404).json({ message: "No posts found with that id!" });
        return;
      }
      
      res.status(200).json(post)
    } catch (err) {
      
      res.status.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {console.log("Hello")
    
    try {
      const post = await Post.create(req.body);
  console.log(post, 'postRoute=======')
      res.status(200).json(post);
    } catch (err) {
      console.error(err)
      res.status(500).json(err);
    }
  });
  
  router.put('/:id', async (req, res) => {
    
    const post = await postData.update(req.body, {
      where: {
        
        id: req.params.id,
      },
    }
    );
    return res.json(post);
  }),
  
  
    router.delete('/:id', async (req, res) => {
      
      console.log({ id: req.params.id })
      try {
        const post = await postData.destroy({
          where: {
            id: req.params.id,
          },
        });
        console.log(post)
        if (!post) {
          res.status(404).json({ message: "No posts found with that id!" });
          return;
        }
        res.status(200).json(post);
      } catch (err) {
        console.error(err)
        res.status(500).json(err);
      }
    });
  
  module.exports = router;