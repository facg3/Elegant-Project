BEGIN;

CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  name varchar(100) NOT NULL UNIQUE,
  email varchar(100)  NOT NULL UNIQUE,
  password text Not NULL,
  role varchar(100) NOT NULL
);



CREATE TABLE IF NOT EXISTS shop_owner (
  id serial PRIMARY KEY,
  name varchar(100) NOT NULL UNIQUE,
  email varchar(100)  NOT NULL UNIQUE,
  password text Not NULL,
  shop_name varchar(100) NOT NULL,
  address varchar(100) NOT NULL,
  approve boolean default false
);

CREATE TABLE IF NOT EXISTS cloths (
  id serial PRIMARY KEY,
  title varchar(100) NOT NULL,
  price varchar(100) NOT NULL,
  img text NOT NULL,
  shop_name varchar(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS cloths_details (
  id serial PRIMARY KEY,
  cloth_id Integer REFERENCES cloths (id),
  img text NOT NULL,
  price varchar(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS blog (
  id serial PRIMARY KEY,
  title varchar(100) NOT NULL,
  article text NOT NULL,
  img text NOT NULL,
  likes text
);

CREATE TABLE IF NOT EXISTS saved (
  id serial PRIMARY KEY,
  cloth_id Integer REFERENCES cloths (id),
  user_id Integer REFERENCES users (id)
);
COMMIT;
