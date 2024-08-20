-- 1. Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- CREATE TABLE customer (
--   customer_id SERIAL,
--   first_name VARCHAR(50),
--   last_name VARCHAR(100) NOT NULL,
--   PRIMARY KEY (customer_id)
-- );

-- CREATE TABLE customer_profile (
--   customer_profile_id SERIAL NOT NULL,
--   isLoggedIn BOOL DEFAULT False,
--   PRIMARY KEY (customer_profile_id),
--   CONSTRAINT customer_id FOREIGN KEY (customer_profile_id) REFERENCES customer (customer_id)
-- );

-- INSERT INTO customer (first_name, last_name) VALUES
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')

-- INSERT INTO customer_profile (customer_profile_id, isLoggedIn) VALUES
-- ((SELECT customer_id FROM customer WHERE first_name = 'John'), True),
-- ((SELECT customer_id FROM customer WHERE first_name = 'Jerome'), False)


-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers

-- SELECT customer.first_name, customer_profile.isLoggedIn
-- FROM customer
-- JOIN customer_profile ON customer.customer_id = customer_profile.customer_profile_id
-- WHERE customer_profile.isLoggedIn = true

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.

-- SELECT customer.first_name, customer_profile.isLoggedIn
-- FROM customer
-- LEFT JOIN customer_profile ON customer.customer_id = customer_profile.customer_profile_id

-- The number of customers that are not LoggedIn

-- SELECT count(customer)
-- FROM customer
-- JOIN customer_profile ON customer.customer_id = customer_profile.customer_profile_id
-- WHERE customer_profile.isLoggedIn = false


-- Part II:

-- 1. Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

-- CREATE TABLE books(
-- book_id SERIAL PRIMARY KEY, 
-- title VARCHAR(150) NOT NULL, 
-- author VARCHAR(100) NOT NULL
-- )

-- 2. Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

-- INSERT INTO books (title, author) VALUES
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee')


-- 3. Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. 
-- Make sure that the age is never bigger than 15 (Find an SQL method);

-- CREATE TABLE student(
-- student_id SERIAL PRIMARY KEY, 
-- student_name VARCHAR (100) NOT NULL UNIQUE, 
-- age SMALLINT CHECK (age <= 15)
-- )

-- 4. Insert those students
-- INSERT INTO student (student_name, age) VALUES
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14)

-- 5. Create a table named Library

-- CREATE TABLE library(
-- book_id INTEGER NOT NULL,
-- student_id INTEGER NOT NULL,
-- borrowed_date DATE,
-- PRIMARY KEY (book_id, student_id),
-- FOREIGN KEY (book_id) REFERENCES books(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- )

-- 6. Add 4 records in the junction table, use subqueries
-- INSERT INTO library (book_id, student_id, borrowed_date) VALUES
-- ((SELECT book_id FROM books WHERE title = 'Alice In Wonderland'),
-- (SELECT student_id FROM student WHERE student_name = 'John'),
-- '02/15/2022')

-- INSERT INTO library (book_id, student_id, borrowed_date) VALUES
-- ((SELECT book_id FROM books WHERE title = 'To kill a mockingbird'),
-- (SELECT student_id FROM student WHERE student_name = 'Bob'),
-- '03/03/2021'),
-- ((SELECT book_id FROM books WHERE title = 'Alice In Wonderland'),
-- (SELECT student_id FROM student WHERE student_name = 'Lera'),
-- '05/23/2021'),
-- ((SELECT book_id FROM books WHERE title = 'Harry Potter'),
-- (SELECT student_id FROM student WHERE student_name = 'Bob'),
-- '08/12/2021')

-- 7. Display the data
-- Select all the columns from the junction table

-- SELECT * FROM library

-- Select the name of the student and the title of the borrowed books

-- SELECT student.student_name, books.title
-- FROM library
-- JOIN student ON student.student_id = library.student_id
-- JOIN books ON books.book_id = library.book_id

-- Select the average age of the children, that borrowed the book Alice in Wonderland

-- SELECT AVG(student.age)
-- FROM library
-- JOIN student ON student.student_id = library.student_id
-- JOIN books ON books.book_id = library.book_id
-- WHERE books.title = 'Alice In Wonderland'

-- Delete a student from the Student table, what happened in the junction table ?

-- DELETE FROM student WHERE student_name = 'Lera'
-- SELECT * FROM library 