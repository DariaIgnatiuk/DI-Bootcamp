""" Exercise 3: Working On A Paragraph
Find an interesting paragraph of text online. (Please keep it appropriate to the 
social context of our class.)
Paste it to your code, and store it in a variable.
Lets analyze the paragraph. Print out a nicely formatted message saying:
How many characters it contains (this one is easy…).
How many sentences it contains.
How many words it contains.
How many unique words it contains.
Bonus: How many non-whitespace characters it contains.
Bonus: The average amount of words per sentence in the paragraph.
Bonus: the amount of non-unique words in the paragraph. """

text = """Mister and Missis Dursley, of number four, Privet Drive, were proud to say 
that they were perfectly normal, thank you very much. They were the last people 
you would expect to be involved in anything strange or mysterious, because they 
just did not hold with such nonsense.
Mister Dursley was the director of a firm called Grunnings, which
made drills. He was a big, beefy man with hardly any neck, although he did have 
a very large mustache. Missis Dursley was thin
and blonde and had nearly twice the usual amount of neck, which
came in very useful as she spent so much of her time craning over
garden fences, spying on the neighbors. The Dursleys had a small
son called Dudley and in their opinion there was no finer boy anywhere. """

print(f"In this paragraph there are {len(text)} characters.")

print(f"There are {text.count(".")} sentances.")

words_list = text.split()
print(f"The text contains {len(words_list)} words")

unique_words = []
none_unique_words = []
for i in range(0, len(words_list)):
    if words_list[i] not in unique_words:
        unique_words.append(words_list[i])
    else:
        if words_list[i] not in none_unique_words:
            none_unique_words.append(words_list[i])
print(f"The text contains {len(unique_words)} unique words")
print(f"The text contains {len(none_unique_words)} none-unique words")

count = 0
for i in range(0, len(text)):
    if text[i] != " ":
        count += 1
print(f"The text contains {count} non-whitespace characters")

sentance_list  = text.split(".")
words_in_sentance = []
for i in range(0, len(sentance_list)):
    sentance = sentance_list[i].split()
    words_in_sentance.append(len(sentance))
print(f"The average amount of words per sentence: {sum(words_in_sentance) // text.count(".")}")    

