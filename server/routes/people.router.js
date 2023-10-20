const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const userId = req.params.id;
    console.log("Req.Params:", userId);
    /* We are breaking apart our GET call to the Database 
    so that the date comes formatted in Month Date and Year, 
    otherwise this will pull with a weird time-stamp. */
    const sqlText =
      `SELECT 
    "id", 
    "name",
    TO_CHAR("date", 'MM-DD-YYYY') AS formatted_date,
    "company",
    "phone",
    "notes",
    TO_CHAR("follow_up_date", 'MM-DD-YYYY') AS follow_up_date,
    "follow_up_complete"
    FROM people 
    WHERE "user_id" = $1
    ORDER BY "date" ASC`;
    // console.log("Get text", sqlText);
    pool
      .query(sqlText, [userId])
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
/**
 * POST route template
 */
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    let newPersonData = req.body
    console.log('/people POST route');
    console.log(newPersonData);
    // console.log('is authenticated?', req.isAuthenticated());
    let queryText = `INSERT INTO "people" ("name", "date","company", "phone", "notes", "follow_up_date", "user_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    pool.query(queryText, [newPersonData.name, newPersonData.date, newPersonData.company, newPersonData.phone, newPersonData.notes, newPersonData.followUpDate, newPersonData.userId])
      .then((result) => {
        console.log("POST Successful")
        res.sendStatus(200);
      })
      .catch((err) => console.log(err));
  }
});

// Update Person Data with a person id
router.put('/update-data/:personId', (req, res) => {
  if (req.isAuthenticated()) {
    let idToUpdate = req.body.id
    // console.log("Id to Update:", req.params.personID)
    let personData = req.body;
    // console.log("Person Data is:", personData)
    let sqlText = `UPDATE people 
  SET "name" = $2,
  "date" = $3,
  "company" = $4, 
  "phone" = $5, 
  "notes" = $6, 
  "follow_up_date" = $7 
  WHERE "id" = $1;`;

    pool
      .query(sqlText, [idToUpdate, personData.name, personData.date, personData.company, personData.phone, personData.notes, personData.followUpDate])
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

//This route is only for updating the completion status of a follow-up
router.put('/update-completion/:personId', (req, res) => {
  if (req.isAuthenticated()) {
    let idToUpdate = req.body.id
    // console.log("Id to Update:", req.params.personID)
    let personData = req.body;
    console.log("Person Data is:", personData)
    let sqlText = `UPDATE people 
  SET
  "follow_up_complete" = $2 
  WHERE "id" = $1;`;

    pool
      .query(sqlText, [idToUpdate, personData.followupCompleteStatus])
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



//Delete an Person from the Database
router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    let idToDelete = req.params.id;
    console.log("idToDelete", idToDelete);
    let sqlText = `
        DELETE FROM people WHERE "id" = $1;
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
