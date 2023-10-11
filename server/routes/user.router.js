const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const EMail = req.body.EMail;

  const queryText = `INSERT INTO "user" (username, password, e_mail)
    VALUES ($1, $2, $3) RETURNING id`;
  pool
    .query(queryText, [username, password, EMail])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

//This Route Updates the User Information by ID
router.put('/:userID', rejectUnauthenticated, (req, res) => {
  console.log("Req.Body looks like", req.body)
  let idToUpdate = req.body.userID;
  let username = req.body.username;
  let password = encryptLib.encryptPassword(req.body.password);
  let email = req.body.email;
  console.log("My Data:", idToUpdate, username, password, email)
  let sqlText = `UPDATE "user" 
  SET "username" = $1, 
  "password"= $2, 
  "e_mail"=$3 
  WHERE "id" = $4;`;
  console.log("sqlText:", sqlText)
  pool
    .query(sqlText, [username, password, email, idToUpdate])
    .then((result) => {
      console.log("Update in database", idToUpdate);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
