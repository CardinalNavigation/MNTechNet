const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  /* We are breaking apart our GET call to the Database 
  so that the date comes formatted in Month Date and Year, 
  otherwise this will pull with a weird time-stamp. */
  const sqlText =
    `SELECT 
    "id", 
    "event_name",
    TO_CHAR("date", 'MM-DD-YYYY') AS formatted_date,
    "time",
    "address",
    "notes",
    "event_complete"
    FROM events ORDER BY "id" ASC`;
  console.log("Get text", sqlText);
  pool
    .query(sqlText)
    .then((result) => {
      // console.log(`GET from database`, result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});
/**
 * POST route template
 */
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    let newEventData = req.body
    // console.log('/shelf POST route');
    // console.log(newEventData);
    // console.log('is authenticated?', req.isAuthenticated());
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
