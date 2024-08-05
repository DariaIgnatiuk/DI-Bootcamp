""" Exercise 5: The Alphabet
Create a string of all the letters in the alphabet
Loop over each letter and print a message that contains 
the letter and whether its a vowel or a consonant. """

alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
vowels = ['a', 'e', 'i', 'o', 'u']
for i in range(0, len(alphabet)):
    if alphabet[i] in vowels:
        print(f"{alphabet[i]} is a vowel")
    else:
        print(f"{alphabet[i]} is a consonant")