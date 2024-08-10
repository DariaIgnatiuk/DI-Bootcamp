# Challenge 1 : Sorting

# words = input("Please enter a comma separated sequence of words: ").split(',')
# sorted_words = [x for x in sorted(words)]
# print(",".join(sorted_words))

# Challenge 2 : Longest Word

def longest_word(sentance):
    list_of_words = sentance.split()
    result = sorted(list_of_words, key=len, reverse=True)
    return result[0]

sentance = input("Please enter your sentance: ")
# print(longest_word(sentance))
print(longest_word(sentance))
