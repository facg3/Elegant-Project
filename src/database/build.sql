BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS users,shop_owner,cloths,cloths_details,blog,saved CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  name varchar(100) NOT NULL UNIQUE,
  email varchar(100)  NOT NULL UNIQUE,
  password text Not NULL,
  role varchar(100) NOT NULL
);

INSERT INTO users  (name, email, password, role) VALUES
('salam','salam@gmail.com','$2a$08$WsD9bqU5GQdcjk4.eC0JkeCOhdRaVJL5x2gU0OF/vG/pKzeSAExy6','admin');

DROP TABLE IF EXISTS shop_owner CASCADE;
CREATE TABLE IF NOT EXISTS shop_owner (
  id serial PRIMARY KEY,
  name varchar(100) NOT NULL UNIQUE,
  email varchar(100)  NOT NULL UNIQUE,
  password text Not NULL,
  shop_name varchar(100) NOT NULL,
  address varchar(100) NOT NULL,
  approve boolean default false
);

INSERT INTO shop_owner (name, email, password, shop_name, address) VALUES
('salam','salam@gmail.com','$2a$08$WsD9bqU5GQdcjk4.eC0JkeCOhdRaVJL5x2gU0OF/vG/pKzeSAExy6','anything', 'anything');

DROP TABLE IF EXISTS cloths CASCADE;

CREATE TABLE IF NOT EXISTS cloths (
  id serial PRIMARY KEY,
  title varchar(100) NOT NULL,
  price varchar(100) NOT NULL,
  img text NOT NULL,
  shop_name varchar(100) NOT NULL
);

INSERT INTO cloths (title, price, img, shop_name) VALUES
('cloth','120 NIS','men1.jpg','anything');


DROP TABLE IF EXISTS cloths_details CASCADE;

CREATE TABLE IF NOT EXISTS cloths_details (
  id serial PRIMARY KEY,
  cloth_id Integer REFERENCES cloths (id),
  img text NOT NULL,
  price varchar(100) NOT NULL
);

INSERT INTO cloths_details (cloth_id, img, price) VALUES
('1','men1.jpg','120 NIS');

DROP TABLE IF EXISTS blog CASCADE;

CREATE TABLE IF NOT EXISTS blog (
  id serial PRIMARY KEY,
  title varchar(100) NOT NULL,
  article text NOT NULL,
  img text NOT NULL,
  likes text
);

INSERT INTO blog (title, article, img, likes) VALUES
('anything','anything anything anything anything','women1.png', 0);

DROP TABLE IF EXISTS saved CASCADE;

CREATE TABLE IF NOT EXISTS saved (
  id serial PRIMARY KEY,
  cloth_id Integer REFERENCES cloths (id),
  user_id Integer REFERENCES users (id)
);

INSERT INTO saved (cloth_id, user_id) VALUES
(1,1);

COMMIT;
