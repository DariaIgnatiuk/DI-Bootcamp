# Exercise 1
# Write a script that inserts an item at a defined index in a list.

# my_list = [1, 2, 3, 5]
# my_list.insert(3, 4)
# print(my_list)


# Exercise 2
# Write a script that counts the number of spaces in a string.

# my_string = "Write a script that counts the number of spaces in a string."
# counter = my_string.count(" ")
# print(counter)


# Exercise 3
# Write a script that calculates the number of upper case letters and lower case letters in a string.

# my_string = "Write a script THAT calculates the number of UPPER case letters and lower case letters in a string."
# lower = sum(map(str.islower, my_string))
# upper = sum(map(str.isupper, my_string))
# print(lower, upper)


# Exercise 4
# Write a function to find the sum of an array without using the built in function:
# my_sum([1,5,4,2])
# 12

# def my_sum(my_array):
#     sum = 0
#     for i in range(len(my_array)):
#         sum += my_array[i]
#     return sum

# my_array = [1,5,4,2]
# print(my_sum(my_array))

# Exercise 5
# Write a function to find the max number in a list
#     >>>find_max([0,1,3,50])
#     >>>50

# def find_max(my_array):
#     max = 0
#     for i in range(len(my_array)):
#         if my_array[i] > max:
#             max = my_array[i]
#     return max

# my_array =[0,1,3,50]
# print(find_max(my_array))


# Exercise 6
# Write a function that returns factorial of a number
#     >>>factorial(4)
#     >>>24

# def factorial(num):
#     result = 1
#     for i in range(1, num + 1):
#         result *= i
#     return result

# print(factorial(4))


# Exercise 7
# Write a function that counts an element in a list (without using the count method):
#     >>>list_count(['a','a','t','o'],'a')
#     >>>2

# def list_count(my_list, char):
#     counter = 0
#     for element in my_list:
#         if element == char:
#             counter +=1
#     return counter
# my_list = ['a','a','t','o']
# print(list_count(my_list,'a'))


# # Exercise 8
# Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:
#     >>>norm([1,2,2])
#     >>>3

# import math

# def norm(my_list):
#     counter = 0
#     for element in my_list:
#         counter += element ** 2
#     return math.sqrt(counter)

# print(norm([1,2,2]))

# Exercise 9
# Write a function to find if an array is monotonic (sorted either ascending of descending)
#     >>>is_mono([7,6,5,5,2,0])
#     >>>True
#     >>>is_mono([2,3,3,3])
#     >>>True
#     >>>is_mono([1,2,0,4])
#     >>>False

# def is_mono(my_list):
#     sorted_accending = []
#     sorted_descending = []
#     sorted_accending.extend(my_list)
#     sorted_descending.extend(my_list)
#     sorted_accending.sort()
#     sorted_descending.sort(reverse=True)
#     if sorted_accending == my_list or sorted_descending == my_list:
#         return True
#     else:
#         return False

# print(is_mono([7,6,5,5,2,0]))
# print(is_mono([2,3,3,3]))
# print(is_mono([1,2,0,4]))


# Exercise 10
# Write a function that prints the longest word in a list.

# def londest_word(my_list):
#     result = ""
#     for element in my_list:
#         if len(element) > len(result):
#             result = element
#     return result

# my_list = ["the", "longest", "word"]
# print(londest_word(my_list))


# Exercise 11
# Given a list of integers and strings, put all the integers in one list, 
# and all the strings in another one.

# def sort_int_and_str(my_list):
#     result_int = []
#     result_str = []
#     for element in my_list:
#         if isinstance(element, int):
#             result_int.append(element)
#         else:
#             result_str.append(element)
#     return result_int, result_str

# my_list = [1, 2, "three", 4, "five"]
# my_list_int, my_list_str = sort_int_and_str(my_list)
# print(my_list_int, my_list_str)


# Exercise 12
# Write a function to check if a string is a palindrome:
#     >>>is_palindrome('radar')
#     >>>True
#     >>>is_palindrome('John)
#     >>>False

# def is_palindrome(word):
#     word_reversed = ""
#     for i in range(len(word) -1, -1, -1):
#         word_reversed += word[i]
#     if word == word_reversed:
#         return True
#     else:
#         return False

# print(is_palindrome('John'))
# print(is_palindrome('radar'))


# Exercise 13
# Write a function that returns the amount of words in a sentence with length > k:
#     >>>sentence = 'Do or do not there is no try'
#     >>>k=2
#     >>>sum_over_k(sentence,k)
#     >>>3

# def sum_over_k(sentence, k):
#     counter = 0
#     for word in sentence:
#         if len(word) > k:
#             counter += 1
#     return k

# sentence = 'Do or do not there is no try'
# k=2
# print(sum_over_k(sentence,k))


# Exercise 14
# Write a function that returns the average value in a dictionary 
# (assume the values are numeric):
#     >>>dict_avg({'a': 1,'b':2,'c':8,'d': 1})
#     >>>3

# def dict_avg(dict):
#     sum  = 0
#     for key in dict:
#         sum += dict[key]
#     return sum / len(dict)

# print(dict_avg({'a': 1,'b':2,'c':8,'d': 1}))


# Exercise 15
# Write a function that returns common divisors of 2 numbers:
#     >>>common_div(10,20)
#     >>>[2,5,10]

# def common_div(num1, num2):
#     div = min(num1, num2)
#     result = []
#     for i in range(div + 1, 1, -1):
#         if num1 % i == 0 and num1 % i == 0:
#             result.append(i)
#     return result

# print(common_div(10,20))


# Exercise 16
# Write a function that test if a number is prime:
#     >>>is_prime(11)
#     >>>True

# def is_prime(num):
#     result = 0
#     for i in range(num - 1, 1, -1):
#         if num % i == 0:
#             result += 1
#     if result == 0:
#         return True
#     else:
#         return False
    
# print(is_prime(11))
    

# Exercise 17
# Write a function that prints elements of a list if the index and the value are even:
#     >>>weird_print([1,2,2,3,4,5])
#     >>>[2,4] - THE EXPECTED RESULT IS WRONG, SHOULD BE [2, 3, 4, 5]

def weird_print(my_list):
    result = []
    for i in range(len(my_list)):
        if i == my_list[i]:
            result.append(i)
    return result

print(weird_print([1,2,2,3,4,5]))


# Exercise 18
# Write a function that accepts an undefined number of keyworded arguments 
# and return the count of different types:
#     >>>type_count(a=1,b='string',c=1.0,d=True,e=False)
#     >>>int: 1, str:1 , float:1, bool:2

# def type_count(**kwargs):
#     result = {'int':0, 'str':0, 'float':0, 'bool':0}
#     for key in kwargs:
#         if type(kwargs[key]) == type(1):
#             result['int'] += 1
#         elif type(kwargs[key]) == type("a"):
#             result['str'] += 1
#         elif type(kwargs[key]) == type(1.0):
#             result['float'] += 1
#         elif type(kwargs[key]) == type(True):
#             result['bool'] += 1
#     return result

# print(type_count(a=1,b='string',c=1.0,d=True,e=False))


# Exercise 19
# Instructions
# Write a function that mimics the builtin .split() method for strings.
# By default the function uses whitespace but it should be able to take an argument 
# for any character and split with that argument.

# def split_by_char(my_string, char):
#     result = []
#     current_word = ""
#     for c in my_string:
#         if c != char:
#             current_word += c
#         else:
#             result.append(current_word)
#             current_word = ""
#     result.append(current_word)    
#     return result

# print(split_by_char("lalal ;ala ll", " "))    


# Exercise 20
# Instructions
# Convert a string into password format.
# Example:
# input : "mypassword"
# output: "***********"

def password(word):
    password = ""
    for i in range(len(word)):
        password += "*"
    return password

print(password("mypassword"))