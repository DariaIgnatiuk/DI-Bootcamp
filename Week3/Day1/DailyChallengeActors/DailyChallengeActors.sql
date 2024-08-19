-- SELECT * FROM actors;

-- 1. Count how many actors are in the table.
-- SELECT COUNT(actor_id) FROM actors;

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
-- I wouldn't be able to add a new actor with blank fieldsm beacause when we created the table, we set all the fields to be not null

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Brad','Pitt','10/20/1984');

-- UPDATE actors
-- SET first_name = 'Maty' 
-- WHERE first_name='Matt' AND last_name='Damon';

-- UPDATE actors 
-- SET number_oscars= 4 
-- WHERE first_name='George' AND last_name='Clooney'
-- RETURNING 
--     actor_id,
--     first_name, 
--     last_name,
--     age;

-- ALTER TABLE actors RENAME COLUMN age TO birthdate;

-- DELETE FROM actors WHERE actor_id=3
-- RETURNING actor_id, first_name, last_name, number_oscars;

-- SELECT avg(number_oscars) AS average_number_oscars FROM actors;

-- SELECT DISTINCT number_oscars FROM actors ORDER BY number_oscars DESC;

-- SELECT * FROM actors WHERE birthdate > ' 01/01/1970'

-- SELECT * FROM actors WHERE first_name in ('David', 'Morgan', 'Will');

-- CREATE TABLE movies(
-- movie_id SERIAL,
-- movie_title VARCHAR (50) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- );

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
--     ( 'Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
--     (SELECT actor_id from actors WHERE first_name='Maty' AND last_name='Damon')),
--     ( 'Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
--     (SELECT actor_id from actors WHERE first_name='Maty' AND last_name='Damon'));

CREATE TABLE producers(
producer_id SERIAL,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (100) NOT NULL,
PRIMARY KEY (producer_id ),
FOREIGN KEY (movie_produced_id) REFERENCES movies (movie_id)
);

-- SELECT * FROM movies