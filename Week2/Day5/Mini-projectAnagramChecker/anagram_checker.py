from pathlib import Path


class AnagramChecker:

    def __init__(self):
        f = open(Path(__file__).with_name('word_list.txt'))
        data = f.read()
        f.close()
        self.word_list = data.split("\n")

    def is_valid_word(self, word):
        if word.upper() in self.word_list:
            return True
        else:
            return False 
        
    @staticmethod    
    def is_anagram(word1, word2):
        word1_char = list(word1)
        word2_char = list(word2)
        for char in word1_char:
            if char in word2_char:
                j = word2_char.index(char)
                word2_char[j] = "*"
            else: 
                return False
        return True

    def get_anagrams(self, word):
        word = word.upper()
        anagrams = []
        for current_word in self.word_list:
            if len(current_word) == len(word):
                if AnagramChecker.is_anagram(current_word, word) and current_word != word:
                    anagrams.append(current_word.lower())
        return anagrams
