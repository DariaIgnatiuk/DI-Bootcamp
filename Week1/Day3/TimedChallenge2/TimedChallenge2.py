number = int(input("Enter your number: "))
divisors = []
for i in range(number//2, 0, -1):
    if number % i == 0:
        divisors.append(i)
print(sum(divisors) == number)
