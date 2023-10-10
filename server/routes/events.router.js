const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.body)
  res.send(req.body);
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    let newEventData = req.body
    // console.log('/shelf POST route');
    // console.log(newEventData);
    console.log('is authenticated?', req.isAuthenticated());

    let queryText = `INSERT INTO "events" ("event_name", "date","time", "address", "notes")
    VALUES ($1, $2, $3, $4, $5)`;
    pool.query(queryText, [newEventData.eventName, newEventData.date, newEventData.time, newEventData.address, newEventData.notes])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => console.log(err));
  }
});

module.exports = router;
