""" Exercise 9: Cinemax
A group of teenagers are coming to your movie theater and want to watch a movie that 
is restricted for people between the ages of 16 and 21.
Given a list of names, write a program that asks teenager for their age, 
if they are not permitted to watch the movie, remove them from the list.
At the end, print the final list. """

string_names = input("Enter the names separated by a single space: ")
list_names  = string_names.split()

list_permitted_names = []
for i in range (0, len(list_names)):
    age = int(input(f"How old is {list_names[i]}? "))
    if age < 16 or age > 21:
        list_permitted_names.append(list_names[i])

print(f"{list_permitted_names} can watch this moovie")