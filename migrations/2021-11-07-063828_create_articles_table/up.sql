-- Your SQL goes here
CREATE Table articles (
    uuid UUID PRIMARY KEY,
    title VARCHAR NOT NULL,
    body TEXT NOT NULL,
    published boolean NOT NULL DEFAULT 'f'
);