# Exercise 2 : Advanced Data Manipulation And Analysis

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
    {"customer_id": 4, "product": "Headphones", "price": 100, "quantity": 1, "date": "2023-04-09"}
]

# 1. Total Sales Calculation
total_sales = []
for sale in sales_data:
    product = sale["product"]
    total_sales.append({"product":sale["product"], "sales":sale["price"] * sale["quantity"]})
total_sales_by_product = []
for sale in total_sales:
    product = sale["product"]
    i = 1
    for tot in total_sales_by_product:
        if tot["product"] == sale["product"]:
            tot["sales"] += sale["sales"]
        else:
            i += 1
    if i > len(total_sales_by_product):
        total_sales_by_product.append({"product":sale["product"], "sales":sale["sales"]})

# 2. Customer Spending Profile
customers = []
for sale in sales_data:
    i = 1
    for current_customer in customers:
        if current_customer["customer_id"] == sale["customer_id"]:
            current_customer["spending"] += sale["price"] * sale["quantity"]
        else:
            i += 1
    if i > len(customers):
        customers.append({"customer_id":sale["customer_id"], "spending": sale["price"] * sale["quantity"]})    


# 3. Sales Data Enhancement

for sale in sales_data:
    sale["total_price"] = sale["price"] * sale["quantity"]
    

# 4. High-Value Transactions
sales_greater_than_500 = []
for sale in sales_data:
    if sale["total_price"] > 500:
        sales_greater_than_500.append(sale)


# 5. Customer Loyalty Identification
customers_number_perchases = []
for sale in sales_data:
    i = 1
    for current_customer in customers_number_perchases:
        if current_customer["customer_id"] == sale["customer_id"]:
            current_customer["purchases"] += 1
        else:
            i += 1
    if i > len(customers_number_perchases):
        customers_number_perchases.append({"customer_id":sale["customer_id"], "purchases": 1})    
for customer in customers_number_perchases:
    if customer["purchases"] > 1:
        print(f"Customer {customer["customer_id"]} is a loyal customer")


# 6. Bonus: Insights and Analysis
# Calculate the average transaction value for each product category.
transaction_value = []
for sale in sales_data:
    i = 1
    for product in transaction_value:
        if product["product"] == sale["product"]:
            product["price"] += sale["price"]
            product["quantity"] += 1
        else:
            i += 1
    if i > len(transaction_value):
        transaction_value.append({"product":sale["product"], "price": sale["price"], "quantity":1})   
for product in transaction_value:
    print(f"Average price of {product["product"]} is {product["price"] // product["quantity"]}")

# Identify the most popular product based on the quantity sold.
quantity = []
for sale in sales_data:
    i = 1
    for product in quantity:
        if product["product"] == sale["product"]:
            product["quantity"] += sale["quantity"]
        else:
            i += 1
    if i > len(quantity):
        quantity.append({"product":sale["product"], "quantity": sale["quantity"]})
max_quantity = 0
for product in quantity:
    if product["quantity"] > max_quantity:
        max_quantity_product = product
print(max_quantity_product)


