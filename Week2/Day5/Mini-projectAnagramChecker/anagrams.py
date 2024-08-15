from anagram_checker import AnagramChecker 

def word_validation(word):
    result = True
    symbols =  {'~','!','@','$','%','^','&','*','(',')','_','-','+','=','{','[','}','}','|',':',';','"','<',',','>','.','?','/'}
    word_list = word.split()
    if len(word_list) != 1:
        result = False
    for char in word:
        if char.isdigit() or char in symbols:
            result = False
    return result


word = ""
while word != 'X':
    print("\nPlease input a word. If you want to exit, input X.")
    word = input()
    word = word.strip()  
    if word !="X":
        if word_validation(word):
            print(f"YOUT WORD: {word}")
            anagram_checker = AnagramChecker()
            if anagram_checker.is_valid_word(word):
                print("This is a valid English word.")
                anagrams = anagram_checker.get_anagrams(word)
                print(f"Anagrams for your word: {anagrams}")
            else: 
                print("this is not a valid English word.")
        else: print("This is not a single word or it has numerals or special characters")
