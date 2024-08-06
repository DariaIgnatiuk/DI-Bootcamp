""" Create a program that prints a list of the items you can afford in the store 
with the money you have in your wallet.
Sort the list in alphabetical order.
Return “Nothing” if you cant afford anything from the store. """

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet_string = input("How much money do you have? ")
wallet = int(wallet_string.split("$")[1])
sum = 0
basket = []
for key in items_purchase:
    price = int(items_purchase[key].split("$")[1])
    if sum + price <= wallet:
        sum += price
        basket.append(key)
if sum == 0:
    print("Nothing")
else:
    print(sorted(basket))

x = "$30"
