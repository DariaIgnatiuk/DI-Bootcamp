-- SELECT * FROM actors;

-- 1. Count how many actors are in the table.
-- SELECT COUNT(actor_id) FROM actors;

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
-- I wouldn't be able to add a new actor with blank fieldsm beacause when we created the table, we set all the fields to be not null

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Brad','Pitt','10/20/1984');