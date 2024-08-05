""" Exercise 8 : List And Tuple
Write a program which accepts a sequence of comma-separated numbers.
Generate a list and a tuple which contain every number.
Suppose the following input is supplied to the program: 34,67,55,33,12,98
Then, the output should be:
['34', '67', '55', '33', '12', '98']
('34', '67', '55', '33', '12', '98')
 """

numbers_string = input("Please insert some numbers separated by comma: ")
numbers_list = numbers_string.split(", ")
numbers_tuple = tuple(numbers_list)
print(numbers_list)
print(numbers_tuple)