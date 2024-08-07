""" Exercise 2 : Advanced Data Manipulation And Analysis
Instructions
In this exercise, you will analyze data from a hypothetical online retail company to gain 
insights into sales trends and customer behavior. The data is represented as a list of 
dictionaries, where each dictionary contains information about a single purchase. 
Tasks:
1. Total Sales Calculation: 
Calculate the total sales for each product category (i.e., 
the total revenue generated from each type of product). Use a loop to iterate through the 
data and a dictionary to store the total sales for each product.
2. Customer Spending Profile: Determine the total amount spent by each customer. 
Use a dictionary to maintain the sum of amounts each customer has spent.
2. Sales Data Enhancement:
Add a new field to each transaction called “total_price” that represents the total 
price for that transaction (quantity * price).
Use a loop to modify the sales_data list with this new information.
4. High-Value Transactions:
Using list comprehension, create a list of all transactions where the total price is greater 
than $500.
Sort this list by the total price in descending order.
5. Customer Loyalty Identification:
Identify any customer who has made more than one purchase, suggesting potential loyalty.
Use a dictionary to count purchases per customer, then use a loop or comprehension to 
identify customers meeting the loyalty criterion.
6. Bonus: Insights and Analysis:
Calculate the average transaction value for each product category.
Identify the most popular product based on the quantity sold.
Provide insights into how these analyses could inform the companys marketing strategies."""

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

# 1. Total Sales Calculation



