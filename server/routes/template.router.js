const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/',  (req, res) => {
  // GET route code here
  res.send(req.body);
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
