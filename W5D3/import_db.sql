DROP TABLE IF EXISTS cattoys;
DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS toys;

CREATE table cats(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  color VARCHAR(255),
  breed VARCHAR(255)
);

CREATE table toys(
  id SERIAL PRIMARY KEY,
  price FLOAT,
  color VARCHAR(255),
  name VARCHAR(255)
);

CREATE table cattoys(
  cat_id INTEGER,
  toy_id INTEGER,

  FOREIGN KEY (cat_id) REFERENCES cats(id),
  FOREIGN KEY (toy_id) REFERENCES toys(id)
);

INSERT INTO cats (name, color, breed)
VALUES ('Fred', 'Yellow', 'Tabby'), 
 ('Chris', 'Blue', 'Persian'),
 ('Braedan', 'Red', 'Russian'),
 ('Zaid', 'Brown', 'British'),
 ('Lisa', 'Orange', 'Bengal');

INSERT INTO toys (price, color, name)
VALUES ('900.00', 'Yellow', 'iPhone'),
 ('7.00', 'Blue', 'tennis ball'),
 ('15.00', 'Red', 'LEGO'),
 ('130.00', 'Brown', 'Scooter'),
 ('1300.00', 'Orange', 'car');


INSERT INTO cattoys (cat_id, toy_id)
VALUES (1, 2),
 (1, 3),
 (2, 3),
 (3, 1),
 (2, 2);


