import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728
sums = 0
for i in range(1, target_number // 2):
    for j in range(target_number // 2, target_number):
        if i + j == target_number:
            sums += 1
print(sums)