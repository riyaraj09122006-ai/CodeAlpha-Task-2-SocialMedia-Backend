const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/post');

router.post('/', auth, async (req, res) => {
  console.log('BODY MILA:', req.body);
  console.log('USER MILA:', req.user.id);
  
  try {
    const newPost = new Post({
      caption: req.body.caption,
      imageUrl: req.body.imageUrl,
      user: req.user.id
    });

    const post = await newPost.save();
    res.json(post);

  } catch (err) {
    console.error('ASLI ERROR:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;