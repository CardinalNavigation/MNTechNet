
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
    "event_complete" BOOLEAN DEFAULT FALSE,
    "user_id" INT REFERENCES "user" NOT NULL
);

CREATE TABLE "people" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "date" DATE DEFAULT CURRENT_DATE,
    "company" VARCHAR (200),
    "phone" VARCHAR (15),
    "notes" VARCHAR (400), 
    "follow_up_date" DATE DEFAULT CURRENT_DATE,
    "follow_up_complete" BOOLEAN DEFAULT FALSE,
    "user_id" INT REFERENCES "user" NOT NULL
 );
