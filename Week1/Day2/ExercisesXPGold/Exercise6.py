""" Exercise 6: Words And Letters
Ask a user for 7 words, store them in a list named words.
Ask the user for a single character, store it in a variable called letter.
Loop through the words list and print the index of the first appearence of 
the letter variable in each word of the list.
If the letter doesn’t exist in one of the words, print a friendly message 
with the word and the letter. """
string_words = input("Enter 7 words separated by a single space: ")
words = string_words.split()
letter = input("Please enter 1 letter: ")
for i in range (0, len(words)):
    if letter in words[i]:
        print(f"Index of letter {letter} in the word {words[i]} is {words[i].index(letter)}")
    else:
        print(f"Letter {letter} is not in the word {words[i]}")