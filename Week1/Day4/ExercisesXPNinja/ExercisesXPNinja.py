# Exercise 1 : What’s Your Name ?

# def get_full_name(first_name, middle_name = '', last_name = ''):
#     name = first_name.capitalize() + " " +middle_name.capitalize() + " " + last_name.capitalize()
#     return name

# print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
# print(get_full_name(first_name="bruce", last_name="lee"))


# Exercise 2 : From English To Morse
# MORSE_CODE_DICT = { 'A':'.-', 'B':'-...',
#                     'C':'-.-.', 'D':'-..', 'E':'.',
#                     'F':'..-.', 'G':'--.', 'H':'....',
#                     'I':'..', 'J':'.---', 'K':'-.-',
#                     'L':'.-..', 'M':'--', 'N':'-.',
#                     'O':'---', 'P':'.--.', 'Q':'--.-',
#                     'R':'.-.', 'S':'...', 'T':'-',
#                     'U':'..-', 'V':'...-', 'W':'.--',
#                     'X':'-..-', 'Y':'-.--', 'Z':'--..',
#                     '1':'.----', '2':'..---', '3':'...--',
#                     '4':'....-', '5':'.....', '6':'-....',
#                     '7':'--...', '8':'---..', '9':'----.',
#                     '0':'-----', ', ':'--..--', '.':'.-.-.-',
#                     '?':'..--..', '/':'-..-.', '-':'-....-',
#                     '(':'-.--.', ')':'-.--.-', ' ':'/'}

# sentance = input("Enter your sentance: ")
# morse = ''
# for char in sentance:
#     morse += MORSE_CODE_DICT[char.capitalize()]
#     morse += ' '
# print(morse)


# Exercise 3 : Box Of Stars

# def box_printer(*args):
#     longest_word = 0
#     for arg in args:
#         if len(arg) > longest_word:
#             longest_word = len(arg)
#     stars = ''
#     longest_word +=1
#     for i in range(longest_word + 3):
#         stars += '*'
#     print(stars)
#     for arg in args:
#         space_amount = longest_word - len(arg)
#         spaces = ''
#         for i in range(space_amount):
#             spaces += ' '
#         print(f"* {arg}{spaces}*")
#     print(stars)  

# box_printer("Hello", "World", "in", "reallylongword", "a", "frame") 

# Exercise 4 : What Is The Purpose Of This Code?

def insertion_sort(alist):
   for index in range(1,len(alist)):

     currentvalue = alist[index]
     position = index

     while position>0 and alist[position-1]>currentvalue:
         alist[position]=alist[position-1]
         position = position-1

     alist[position]=currentvalue

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)

# This code sorts the list from lowers number to highest