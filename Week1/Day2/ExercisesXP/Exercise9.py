""" Exercise 9: Cinemax
A movie theater charges different ticket prices depending on a person’s age.
if a person is under the age of 3, the ticket is free.
if they are between 3 and 12, the ticket is $10.
if they are over the age of 12, the ticket is $15.
Ask a family the age of each person who wants a ticket.
Store the total cost of all the family’s tickets and print it out. """

number_family_members = input ("How many people are there in your family? ")
price = 0
for i in range (0, int(number_family_members)):
    age = int(input(f"Please enter the age of family member number {i + 1}: "))
    if age > 12:
        price +=15
    elif age >= 3 and age <=12:
        price +=10
print(f"The price of tickets for your family is {price}")
