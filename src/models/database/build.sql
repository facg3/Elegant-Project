BEGIN;

DROP TABLE IF EXISTS users,shop_owner,cloths,cloths_details,blog,saved,outfits CASCADE;

CREATE TABLE "users" (
    "id" serial NOT NULL,
    "name" varchar(100) NOT NULL UNIQUE,
    "email" varchar(100) NOT NULL UNIQUE,
    "password" varchar NOT NULL,
    "role" varchar NOT NULL,
    CONSTRAINT Users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "shop_owner" (
    "id" serial NOT NULL,
    "name" varchar(100) NOT NULL UNIQUE,
    "email" varchar(100) NOT NULL UNIQUE,
    "password" varchar NOT NULL,
    "shop_name" varchar(100) NOT NULL,
    "address" varchar(100) NOT NULL,
    "approve" BOOLEAN NOT NULL DEFAULT 'false',
    CONSTRAINT shop_owner_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "cloths" (
    "id" serial NOT NULL,
    "title" varchar(100) NOT NULL,
    "price" integer NOT NULL,
    "img" varchar NOT NULL,
    "shop_name" varchar(100) NOT NULL,
    "shop_owner_id" serial NOT NULL,
    "gender" varchar(10) NOT NULL,
    CONSTRAINT cloths_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "cloths_details" (
    "id" serial NOT NULL,
    "cloth_id" serial NOT NULL,
    "img" varchar NOT NULL,
    "price" integer NOT NULL,
    CONSTRAINT cloths_details_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "blog" (
    "id" serial NOT NULL,
    "title" varchar(100) NOT NULL,
    "article" TEXT NOT NULL,
    "img" varchar NOT NULL,
    "likes" integer NOT NULL,
    CONSTRAINT blog_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "saved" (
    "id" serial NOT NULL,
    "cloth_id" serial NOT NULL,
    "user_id" serial NOT NULL,
    CONSTRAINT saved_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "outfits" (
    "id" serial NOT NULL,
    "img" varchar NOT NULL,
    "gender" varchar(10) NOT NULL,
    CONSTRAINT outfits_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "cloths" ADD CONSTRAINT "cloths_fk0" FOREIGN KEY ("shop_owner_id") REFERENCES "shop_owner"("id");
ALTER TABLE "cloths_details" ADD CONSTRAINT "cloths_details_fk0" FOREIGN KEY ("cloth_id") REFERENCES "cloths"("id");
ALTER TABLE "saved" ADD CONSTRAINT "saved_fk0" FOREIGN KEY ("cloth_id") REFERENCES "cloths"("id");
ALTER TABLE "saved" ADD CONSTRAINT "saved_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("id");

INSERT INTO users  (name, email, password, role) VALUES
('salam','salam@gmail.com','$2a$08$WsD9bqU5GQdcjk4.eC0JkeCOhdRaVJL5x2gU0OF/vG/pKzeSAExy6','admin');

INSERT INTO shop_owner (name, email, password, shop_name, address) VALUES
('salam','salam@gmail.com','$2a$08$WsD9bqU5GQdcjk4.eC0JkeCOhdRaVJL5x2gU0OF/vG/pKzeSAExy6','anything', 'anything');

INSERT INTO cloths (title, price, img, shop_name,gender) VALUES
('cloth',120,'men1.png','anything','men');

INSERT INTO cloths_details (cloth_id, img, price) VALUES
('1','men1.jpg',120);

INSERT INTO outfits (img, gender) VALUES
('men1.jpg','men');

INSERT INTO blog (title, article, img, likes) VALUES
('anything','anything anything anything anything','women1.png', 0);

INSERT INTO saved (cloth_id, user_id) VALUES
(1,1);

COMMIT;
