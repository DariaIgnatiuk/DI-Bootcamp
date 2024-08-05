""" Exercise 4: Greatest Number
Ask the user for 3 numbers and print the greatest number.
    Test Data
    Input the 1st number: 25
    Input the 2nd number: 78
    Input the 3rd number: 87
    The greatest number is: 87 """

string_numbers = input("Enter 3 numbers separated by a single space: ")
list_numbers  = string_numbers.split()
greatest_number = 0
for i in range (0, len(list_numbers)):
    if int(list_numbers[i]) > greatest_number:
        greatest_number = int(list_numbers[i])
print(f"The greatest number is: {greatest_number}")