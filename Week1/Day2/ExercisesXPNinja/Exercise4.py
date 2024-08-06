""" Exercise 4 : Frequency Of The Words
Write a program that prints the frequency of the words from the input.
Suppose the following input is supplied to the program:
New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.
Then, the output should be:
    2:2
    3.:1
    3?:1
    New:1
    Python:5
    Read:1
    and:1
    between:1
    choosing:1
    or:2
    to:1 """

sentance = input("Please write a sentance: ")
words_in_sentance = sentance.split()
unique_words = []
for i in range (0, len(words_in_sentance)):
    if words_in_sentance[i] not in unique_words:
        unique_words.append(words_in_sentance[i])
for i in range (0, len(unique_words)):
    print(f"{unique_words[i]} : {words_in_sentance.count(unique_words[i])}")