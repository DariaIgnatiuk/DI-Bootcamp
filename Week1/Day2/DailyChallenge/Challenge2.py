""" Write a program that asks a string to the user, and display a new string with 
any duplicate consecutive letters removed.
Examples
user's word : "ppoeemm" ➞ "poem"
user's word : "wiiiinnnnd" ➞ "wind"
user's word : "ttiiitllleeee" ➞ "title"
user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
Final strings won’t include words with double letters (e.g. “passing”, “lottery”). """

word = input("Please enter your word: ")
result = word[0]
for i in range (1, len(word)):
    if word[i] != result[-1]:
        result = result + word[i]
print(result)