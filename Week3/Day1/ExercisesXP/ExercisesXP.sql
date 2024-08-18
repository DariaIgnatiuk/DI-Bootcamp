CREATE TABLE items(
 item_id SERIAL PRIMARY KEY,
 item VARCHAR (50) NOT NULL,
 price SMALLINT NOT NULL
)

CREATE TABLE items(
 item_id SERIAL PRIMARY KEY,
 item VARCHAR (50) NOT NULL,
 price SMALLINT NOT NULL
)

INSERT INTO items (item, price)
VALUES('Small Desk', 100);

INSERT INTO items (item, price)
VALUES('Large Desk', 300);

INSERT INTO items (item, price)
VALUES('Fan', 80);

INSERT INTO customers (first_name, family_name)
VALUES('Greg', 'Jones');

INSERT INTO customers (first_name, family_name)
VALUES('Sandra', 'Jones');

INSERT INTO customers (first_name, family_name)
VALUES('Scott', 'Scott');

INSERT INTO customers (first_name, family_name)
VALUES('Trevor', 'Green');

INSERT INTO customers (first_name, family_name)
VALUES('Melanie', 'Johnson');

SELECT * FROM items;
SELECT * FROM customers;
SELECT * FROM items WHERE price > 80;
SELECT * FROM items WHERE price < 300;
SELECT * FROM customers WHERE family_name = 'Smith';
SELECT * FROM customers WHERE family_name = 'Jones';
SELECT * FROM customers WHERE family_name != 'Scott';

