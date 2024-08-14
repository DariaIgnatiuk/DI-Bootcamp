class Text:

    def __init__(self, text):
        self.text = text
        self.words = text.split(" ")

    def frequency_of_word(self, word):
        counter = 0
        for element in self.words:
            if element == word:
                counter += 1
        if counter == 0: 
            return None
        else:
            return f"The frequency of the word '{word}' is {counter}."
        
    def most_common_word(self):
        return max(set(self.words), key=self.words.count)
    
    def unique_words(self):
        set_of_words = set(self.words)
        return list(set_of_words)
    
class TextModification(Text):

    def no_punctuation(self):
        punc = '''!()-;:'",.'''
        for char in self.text:
            if char in punc:
                self.text = self.text.replace(char, "")
        return self.text
    
    def no_stop_words(self):
        f = open('english_stop_words.txt')
        data = f.read()
        stop_words = data.split("\n")
        result = []
        for word in self.words:
            if word.lower() not in stop_words:
                result.append(word)
        return " ".join(result)
    
    def no_special_characters(self):
        sp_char = "#$%^&*()_-~@+={[|:;'<>"
        for char in self.text:
            if char in sp_char:
                self.text = self.text.replace(char, "")
        return self.text

# Part 1
# text = Text("A good book would sometimes cost as much as a good house.")
# print(text.frequency_of_word("much"))
# print(text.most_common_word())
# print(text.unique_words())

# Part 2
# f = open('the_stranger.txt')
# data = f.read()
# text = Text(data)
# print(text.frequency_of_word("much"))
# print(text.most_common_word())
# print(text.unique_words())

# Part 3
f = open('the_stranger.txt')
data = f.read()
text = TextModification(data)
# print(text.no_punctuation())
# print(text.no_stop_words())
print(text.no_special_characters())

