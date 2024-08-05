""" Exercise 8: Who Ordered A Pizza ?
Write a loop that asks a user to enter a series of pizza toppings, 
when the user inputs ‘quit’ stop asking for toppings.
As they enter each topping, print a message saying you’ll add that topping to their pizza.
Upon exiting the loop print all the toppings on the pizza pie and what the total 
price is (10 + 2.5 for each topping). """

toppings_list = []
message = ""
while message != "quit":
    message = input ("Which topping would you like to add to your pizza? ")
    if message != "quit":
        toppings_list.append(message)
        print("I'll add this topping to your pizza")
print("Yours toppings are: ")
price = 10
for i in range (0, len(toppings_list)):
    print(toppings_list[i])
    price +=2.5
print(f"The price of your pizza is :{price}")

