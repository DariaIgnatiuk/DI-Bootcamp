def get_word():
    """returns a random word from the list"""
    import random
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
        

def hangman():
    word = get_word()
    print(word)
    coded_word = code_word(word)
    print(f"Guess this word: {coded_word}")
    letter = input("Please enter a letter: ")
    if letter in word:
        coded_word = open_letter(letter,word,coded_word)
        print(coded_word)


hangman()