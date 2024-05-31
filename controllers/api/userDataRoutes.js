const router = require('express').Router();
const { User, Post } = require('../../models');

router.get('/', async (req, res) => {
    
    try {
      const user = await User.findAll({
        
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id, {
        include: [{ model: Post }],
      });
  
      
      if (!user) {
        res.status(404).json({ message: "No posts found with that id!" });
        return;
      }
      
      res.status(200).json(user)
    } catch (err) {
      
      res.status.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({ 
        user_name: req.body.username, 
        password: req.body.password,
      });
  
      req.session.save(() => { 
        req.session.loggedIn = true;
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
  //store the data
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  router.put('/:id', async (req, res) => {
    
    const user = await User.update(req.body, {
      where: {
        
        id: req.params.id,
      },
    }
    );
    return res.json(user);
  }),
  
  
    router.delete('/:id', async (req, res) => {
      
      console.log({ id: req.params.id })
      try {
        const user = await userData.destroy({
          where: {
            id: req.params.id,
          },
        });
        console.log(user)
        if (!user) {
          res.status(404).json({ message: "No users found with that id!" });
          return;
        }
        res.status(200).json(user);
      } catch (err) {
        console.error(err)
        res.status(500).json(err);
      }
    });
  
    router.post('/login', async (req, res) => {
      try {
        const userData = await User.findOne({ where: {user_name: req.body.username } });
    
        if (!userData) {
          res
            .status(400)
            .json({ message: 'Incorrect username, please try again' });
          return;
        }
    
        const validPassword = await userData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.loggedIn = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
    
      } catch (err) {
        res.status(400).json(err);
      }
    });

    router.post('/logout', (req, res) => {
      if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
    });
  module.exports = router;