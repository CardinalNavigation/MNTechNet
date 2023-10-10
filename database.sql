
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "e_mail" VARCHAR (100) NOT NULL
);

CREATE TABLE "events" (
    "id" SERIAL PRIMARY KEY,
    "event_name" VARCHAR (200) NOT NULL,
    "date" DATE NOT NULL,
    "time" VARCHAR(7) NOT NULL,
    "address" VARCHAR (200) NOT NULL,
    "notes" VARCHAR (400), 
    "event_complete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "events" ("event_name", "date", "time", "address", "notes")
VALUES ('Tech On Tap', '10/13/23', '5:00PM', '1234 Fake St. Minneapolis MN 55411','it will be on the corner of 5th and 3rd, remember to connect with Erik');

CREATE TABLE "people" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "date" DATE,
    "company" VARCHAR (200),
    "phone" VARCHAR (15),
    "notes" VARCHAR (400), 
    "follow_up_date" DATE NOT NULL,
    "follow_up_compelte" BOOLEAN DEFAULT FALSE
 );

INSERT INTO "people" ("name", "date", "phone", "notes", "follow_up_date")
VALUES ('Popeye Sailorman', '10/13/23', '123-456-7899', 'he really smelt like spinach','10/14/23');