""" Exercise 4: Floats
Recap What is a float? What is the difference between an integer and a float?
Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 
(dont hard-code the sequence).
Can you think of another way to generate a sequence of floats? """

list_of_floats = []
x=1.5
for i in range(0, 7):
    list_of_floats.append(x)
    x = x + 0.5
    i =+ 1
print(list_of_floats)


