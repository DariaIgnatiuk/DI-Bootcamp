""" In cryptography, a Caesar cipher is one of the simplest and most widely known 
encryption techniques.
It is a type of substitution cipher in which each letter in the plaintext is 
replaced by a letter some fixed number of positions down the alphabet.
Create a python program that encrypts and decrypts messages with ceasar cypher.
The user enters the program, and then the program asks him if he wants to encrypt or decrypt, 
and then execute encryption/decryption on a given message and a given shift. """

task = input("Do you want to encrypt or decrypt a message? ").lower()
text = input("Please enter your message: ")
shift = int(input("Please enter a shift: "))

cypher_text = ""

if task == "encrypt":
    for letter in text:
        if ord(letter) < 65:
            cypher_text += letter
        else:
            if ord(letter) < 122 - shift:
                cypher_text += chr(ord(letter) + shift)
            else:
                cypher_text += chr(ord(letter) + shift - 26)
    print(f"Your encrypted message: {cypher_text}")
else:
    for letter in text:
        if ord(letter) < 65:
            cypher_text += letter
        else:
            if ord(letter) - shift <  97 :
                cypher_text += chr(ord(letter) - shift + 26)
            else:
                cypher_text += chr(ord(letter) - shift)
    print(f"Your decrypted message: {cypher_text}")