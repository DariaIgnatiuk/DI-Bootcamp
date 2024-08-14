# Exercise 1 – Random Sentence Generator

def get_words_from_file():
    f = open('word_list.txt')
    data = f.read()
    f.close()
    return data

collection = get_words_from_file()
print(collection[0:100])