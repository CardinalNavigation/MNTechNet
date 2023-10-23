
# MNTechNet

# Description
Duration: 2 Week Sprint

Keeping track of meetups and networking events can be a real pain. Even worse is losing track of the people that you meet when you want to grow your Network.

MNTechNet allows users to input and record information about networking events and the people that you meet at them all in one place. This will allow you to relax and enjoy the process of networking, while keeping yourself on track. 

[MNTechNet](https://mntechnet-b6820d837da4.herokuapp.com/#/login)

# Set Up (When Dowloading the Repo for personal use):
1. Fork this repository, or use it as a template
2. Install [PostgreSQL](https://www.postgresql.org/download/) to use as your database. 
3. Also Install [Postico](https://eggerapps.at/postico2/) to help you manage your database. 
4. Create a PostgreSQL database called "mntechnet" 
5. Run the SQL queries in the database.sql file to create your tables. 
6. Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
and replace everything after the right of the equals sign with a secure password
7. In your terminal run `npm install`
8. Run `npm run server`, which will start your server, 
9. Run `npm run client` which will start the client and open a tab in your default browser at localhost:3000

# Usage (For the Deployed Website Online)
1. Register for access if you are new user OR Login
2. When you log into the app, you can see that your dashboard is blank, this will be filled as you add events an people to this your lists. 
3. Create and Event you would like to atted, or Add a Person who you would like to Network with Further. 
4. In your Events List or People List, view the people who you have added to your lists, or edit their information or notes. 
5. You can edit your profile password in the profile tab. 
6. In your dashboard, you can track your upcoming events, and people you have marked for follow-up. Once the mark complete button is pressed that event or person will no longer appear in this view. 

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

# Roadmap
Possible Feature Implementation would include:
* Options for users to add another user's created event to their own profile.
* The ability for users to change the status of "Marked Complete" back to "false" 
* Google Maps API integration for tracking locations of the events. 
* Expanding the interconnectedness of user profiles so that users can interact more. 

# Built With (See package.json for complete list)
* [React.js](https://react.dev/)
* [Redux/Sagas](https://redux-saga.js.org/)
* [Node.js](https://nodejs.org/en)
* [Nodemon](https://nodemon.io/)
* [Axios](https://axios-http.com/docs/intro)
* [PostgreSQL](https://www.postgresql.org/download/)
* [Postico](https://eggerapps.at/postico2/)
* [MaterialUI](https://mui.com/material-ui/) (Along with JoyUI)
* ["Pool" PG](https://node-postgres.com/apis/pool)
* [Passport.js](https://www.passportjs.org/)

# Scope Documentation
If you are interested in viewing the Scope Documentation that was used for this project, I have incldued a link to those below:
[Solo Project Scope Document](https://docs.google.com/document/d/1VX4q-TNzAl9dMMNnz2_rwzX5ydKUd8mbf44iOco_7AE/edit?usp=sharing)
[Figma Design Board](https://www.figma.com/file/zPMiC3oRIczKojSHlB3oQ2/MNTechNet?type=design&node-id=0%3A1&mode=design&t=zI3NiHVELSIHlBiv-1)

# Acknowledgement
Thank you to my instructor Andrew Harasymiw and the staff at [Prime Digital Academy] for guiding me through the process of scoping, spiking, creating and delpoying this project. 

A hearfelt thank you to my Wife for her evergreen optimism and support and being the best out there. 

