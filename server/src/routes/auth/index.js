const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  const { body } = req;
  return res.json({
    message: `Credentials email: ${ body.email }  recieved`
  })
});

module.exports = router;
