const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send('user route')
});


// eslint-disable-next-line no-undef
module.exports = router;