const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET Route
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
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
    "user_id"
    FROM events ORDER BY "date" ASC`;
    // console.log("Get text", sqlText);
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
  }
});

//POST Route
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    let newEventData = req.body
    // console.log('/shelf POST route');
    console.log(newEventData);
    // console.log('is authenticated?', req.isAuthenticated());
    let queryText = `INSERT INTO "events" ("event_name", "date","time", "address", "notes", "user_id")
    VALUES ($1, $2, $3, $4, $5, $6)`;
    pool.query(queryText, [newEventData.eventName, newEventData.date, newEventData.time, newEventData.address, newEventData.notes, newEventData.userID])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => console.log(err));
  }
});

// Update Event Data with a person id
router.put('/:eventId', (req, res) => {
  if (req.isAuthenticated()) {
    let idToUpdate = req.body.eventID
    console.log("Id to Update:", idToUpdate)
    let eventData = req.body;
    console.log("Event Data is:", eventData)
    let sqlText = `UPDATE events 
  SET 
  "event_name" = $2,
  "date" = $3,
  "time" = $4, 
  "address" = $5, 
  "notes" = $6 
  WHERE "id" = $1;`;

    pool
      .query(sqlText, [idToUpdate, eventData.eventName, eventData.date, eventData.time, eventData.address, eventData.notes])
      .then((result) => {
        console.log("ID updated in database", idToUpdate);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      });
  }
});


router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    let idToDelete = req.params.id;
    console.log("idToDelete", idToDelete);
    let sqlText = `
        DELETE FROM events WHERE "id" = $1;
        `;
    pool
      .query(sqlText, [idToDelete])
      .then((result) => {
        console.log("Deleted from database ", idToDelete);
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      });
  }
});

module.exports = router;
