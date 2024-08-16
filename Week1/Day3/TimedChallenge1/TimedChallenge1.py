REverseinp= input("Please insert your sentance here: ")
not_reversed = REverseinp.split()
print(not_reversed)
reversed = ""
for word in not_reversed:
    reversed = word + " " + reversed
print(reversed)