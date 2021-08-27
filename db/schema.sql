SELECT 'CREATE DATABASE ctagdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'ctagdb')\gexec

CREATE TABLE ctag_profile(
  ID SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  biography TEXT,
  hashpoint TEXT,
  profile_photo_url TEXT
);

CREATE TABLE media(
  ID SERIAL PRIMARY KEY,
  ctag_id INT,
  CONSTRAINT ctag_id
    FOREIGN KEY(ctag_id)
      REFERENCES ctag_profile(ID),
  type TEXT,
  url TEXT
);

CREATE TABLE media_photo(
  ID SERIAL PRIMARY KEY,
  media_id INT,
  CONSTRAINT media_id FOREIGN KEY(media_id) REFERENCES media(ID),
  default_type BOOLEAN,
  purpose TEXT,
  url TEXT
);

\copy ctag_profile FROM '/tmp/users.csv' WITH (FORMAT csv);
\copy media FROM '/tmp/medias.csv' WITH (FORMAT csv);
\copy media_photo FROM '/tmp/media_photos.csv' WITH (FORMAT csv);