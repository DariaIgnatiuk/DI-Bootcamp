import random

gallows = [
    '''
  +---+
  |   |
      |
      |
      |
      |
=========''',
    '''
  +---+
  |   |
  O   |
      |
      |
      |
=========''',
    '''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========''',
    '''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''',
    '''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========''',
    '''
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========''',
    '''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
========='''
]

def get_word():
    """returns a random word from the list"""
    wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
    return random.choice(wordslist) 

def code_word(word):
    """returns coded word"""
    coded_word = ""
    for i in range(len(word)):
        if word[i] == " ":
            coded_word = coded_word + " "
        else: 
            coded_word = coded_word + "*"
    return coded_word

def open_letter(letter,word,coded_word):
    char_list = list(word)
    char_list_coded = list(coded_word)
    for i in range(len(char_list)):
        if char_list[i] == letter:
            char_list_coded[i] = letter
    return "".join(char_list_coded)

def win(coded_word):
    if "*" not in coded_word:
        return True
    else:
        return False
        

def hangman():
    word = get_word()
    number_tries = 0
    coded_word = code_word(word)
    named_letters = []
    print(f"Guess this word: {coded_word}. You have {6 - number_tries} tries.")
    while number_tries < 6 and not win(coded_word):
        print(gallows[number_tries])
        letter = input("Please enter a letter: ")
        while letter in named_letters:
            letter = input("You have already named this letter! Try again: ")
        named_letters.append(letter)
        if letter in word:
            coded_word = open_letter(letter,word,coded_word)
            print("You guessed a letter!")
            print(coded_word)
        else: 
            number_tries += 1
            print(f"You didn't guess the letter. You have {6 - number_tries} tries left")
            print(coded_word)
    if number_tries == 6:
        print("You lost the game!")
        print(gallows[number_tries])
    else:
        print("You won!")
        

hangman()