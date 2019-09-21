PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_likes;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname VARCHAR(255),
  lname VARCHAR(255)
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255),
  body VARCHAR(255),
  users_id INTEGER,

  FOREIGN KEY (users_id) REFERENCES  users(id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  questions_id INTEGER,
  users_id INTEGER,

  FOREIGN KEY (questions_id) REFERENCES questions(id),
  FOREIGN KEY (users_id) REFERENCES user(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  questions_id INTEGER,
  parent_reply_id INTEGER,
  users_id INTEGER,
  body VARCHAR(255),

  FOREIGN KEY (parent_reply_id) references replies(id),
  FOREIGN KEY (users_id) references users(id),
  FOREIGN KEY (questions_id) references questions(id)
);

CREATE TABLES questions_likes (
  id INTEGER PRIMARY KEY,
  likes BOOLEAN,
  users_id INTEGER,
  questions_id INTEGER,

  FOREIGN KEY (users_id) REFERENCES users(id),
  FOREIGN KEY (questions_id) REFERENCES questions(id),
  
)