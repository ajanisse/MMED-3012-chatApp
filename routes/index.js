const express = require('express'); //same as php include
const router = express.Router();
const path = require('path');


//this is a route, this points at the home page / root
router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/index.html'))
});


module.exports = router;
