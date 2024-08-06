""" Exercise 1: Formula
Write a program that calculates and prints a value according to this given formula:
Q = Square root of [(2 * C * D)/H]
Following are the fixed values of C and H:
C is 50.
H is 30.
Ask the user for a comma-separated string of numbers, use each number 
from the user as D in the formula and return all the results
For example, if the user inputs: 100,150,180
The output should be:
18,22,24
 """

c = 50
h = 30
string_d = input("Enter a list of numbers separated by a comma: ")
list_d = string_d.split(",")
import math
result = []
for i in range (0, len(list_d)):
    x =  round(math.sqrt(2 * c * int(list_d[i]) / h))
    result.append(x)
print(list_d)
print(result)