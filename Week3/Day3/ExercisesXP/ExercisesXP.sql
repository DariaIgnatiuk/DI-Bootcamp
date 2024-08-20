-- Exercise 1. DVD Rental

-- 1. Get a list of all the languages, from the language table.

-- SELECT name FROM language

-- 2. Get a list of all films joined with their languages – select the following details : film title, 
-- description, and language name.

-- SELECT film.title, film.description, language.name
-- FROM film
-- RIGHT JOIN language
-- ON film.language_id = language.language_id

-- 3. Get all languages, even if there are no films in those languages – select the following details : 
-- film title, description, and language name.

-- SELECT film.title, film.description, language.name
-- FROM film
-- LEFT JOIN language
-- ON film.language_id = language.language_id

-- 4. Create a new table called new_film with the following columns : id, name. Add some new films to the table.

-- CREATE TABLE new_film(
-- new_film_id SERIAL PRIMARY KEY,
-- new_film_name VARCHAR(100)
-- )

-- INSERT INTO new_film (new_film_name) VALUES ('Keith'), ('Shrek'), ('Atonement'), ('Dune')

-- 5. Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- CREATE TABLE customer_review(
-- review_id SERIAL PRIMARY KEY,
-- film_id INTEGER REFERENCES new_film (new_film_id) ON DELETE CASCADE,
-- language_id INTEGER REFERENCES language (language_id) ON DELETE SET NULL,
-- title VARCHAR(100),
-- score SMALLINT,
-- review_text TEXT,
-- last_update DATE
-- )

-- 6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update) 
-- VALUES 
-- (2, 1, 'Best film', 10, 'I loved every minute of it', '10/09/2024'),
-- (3, 4, 'Aweful', 3, 'Super boring', '04/06/2023')

-- 7. Delete a film that has a review from the new_film table, what happens to the customer_review table?

-- DELETE FROM new_film WHERE new_film_id = 2
-- SELECT * FROM customer_review


-- Exercise 2 : DVD Rental
-- 1. Use UPDATE to change the language of some films. Make sure that you use valid languages.


-- UPDATE film
-- SET language_id = 4
-- WHERE film_id  = 133

-- UPDATE film
-- SET language_id = 5
-- WHERE film_id  = 1

-- 2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we 
-- INSERT into the customer table?
-- foreign key - address_id. We need to know the address_id before inserting into customer table

-- 3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

-- DROP TABLE customer_review

-- 4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- select count(*) FROM RENTAL 

-- 5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

-- SELECT rental.rental_id, payment.amount
-- FROM rental
-- JOIN payment
-- ON rental.rental_id = payment.rental_id
-- ORDER BY payment.amount DESC LIMIT 30

-- 6. Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t 
-- remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- SELECT film.title, film.description, actor.first_name, actor.last_name
-- FROM film_actor
-- JOIN actor ON film_actor.actor_id = actor.actor_id
-- JOIN film ON film_actor.film_id = film.film_id
-- WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe' AND film.description ILIKE '%sumo%'

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

-- SELECT film.title, film.length, film.rating, category.name
-- FROM film_category
-- JOIN category ON category.category_id = film_category.category_id
-- JOIN film ON film.film_id = film_category.film_id
-- WHERE film.length < 60 AND film.rating = 'R' AND category.name = 'Documentary'

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
-- and he returned it between the 28th of July and the 1st of August, 2005.

-- SELECT film.title,  customer.first_name, customer.last_name, payment.amount, rental.return_date
-- FROM customer 
-- JOIN rental ON customer.customer_id = rental.customer_id
-- JOIN inventory ON inventory.inventory_id = rental.inventory_id
-- JOIN film ON film.film_id = inventory.film_id
-- JOIN payment ON customer.customer_id = payment.customer_id
-- WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND payment.amount >= 4 AND rental.return_date between '07/28/2005' and '08/01/2005'
-- GROUP BY film.title, customer.first_name, customer.last_name, payment.amount, rental.return_date

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or 
-- description, and it looked like it was a very expensive DVD to replace.

-- SELECT film.title, customer.first_name, customer.last_name, film.replacement_cost
-- FROM customer 
-- JOIN rental ON customer.customer_id = rental.customer_id
-- JOIN inventory ON inventory.inventory_id = rental.inventory_id
-- JOIN film ON film.film_id = inventory.film_id
-- WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
-- ORDER BY film.replacement_cost DESC