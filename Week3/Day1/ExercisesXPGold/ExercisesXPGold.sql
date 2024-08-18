-- CREATE TABLE students(
--  item_id SERIAL PRIMARY KEY,
--  last_name VARCHAR (100) NOT NULL,
--  first_name VARCHAR (50) NOT NULL,
--  birth_date DATE NOT NULL
-- )

-- INSERT INTO students (last_name, first_name, birth_date) VALUES
-- ('Benichou', 'Marc', '11/02/1998'),
-- ('Cohen', 'Yoan', '12/03/2010'),
-- ('Benichou', 'Lea', '07/27/1987'),
-- ('Dux', 'Amelia', '04/07/1996'),
-- ('Grez', 'David', '06/14/2003'),
-- ('Simpson', 'Omer', '10/03/1980');

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES('Daria','Ignatiuk','01/01/1989');

-- SELECT * FROM students

-- SELECT
--    first_name,
--    last_name
-- FROM
--    students;

-- 1. Fetch the student which id is equal to 2

-- SELECT first_name, last_name FROM students WHERE item_id = 2

-- 2. Fetch the student whose last_name is Benichou AND first_name is Marc

-- SELECT first_name,last_name FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou'

-- 3. Fetch the students whose last_names are Benichou OR first_names are Marc.

-- SELECT first_name,last_name FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou'

-- 4. Fetch the students whose first_names contain the letter a.

-- SELECT first_name,last_name FROM students WHERE first_name ILIKE '%a%'

-- 5. Fetch the students whose first_names start with the letter a.

-- SELECT first_name,last_name FROM students WHERE first_name ILIKE 'a%'

-- 6. Fetch the students whose first_names end with the letter a.

-- SELECT first_name,last_name FROM students WHERE first_name LIKE '%a'

-- 7. Fetch the students whose second to last letter of their first_names are a (Example: Leah).

-- SELECT first_name,last_name FROM students WHERE first_name LIKE '%a_'

-- 8. Fetch the students whose id’s are equal to 1 AND 3 .

-- SELECT first_name, last_name FROM students WHERE item_id = 1 AND item_id = 3

-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).

-- SELECT * FROM students WHERE birth_date >= '1/01/2000'

-- ExercisesXPGold
-- 1. Fetch the first four students. You have to order the four students alphabetically by last_name.

-- SELECT first_name, last_name, birth_date FROM students ORDER BY last_name ASC LIMIT 4

-- 2. Fetch the details of the youngest student.

-- SELECT first_name, last_name, birth_date FROM students ORDER BY birth_date DESC LIMIT 1

-- 3. Fetch three students skipping the first two students.

SELECT first_name, last_name, birth_date FROM students LIMIT 3 OFFSET 2