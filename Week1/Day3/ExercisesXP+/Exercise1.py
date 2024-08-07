""" You are given a dictionary containing student names as keys and lists of their 
grades as values. Your task is to create a summary report that calculates the average grade 
for each student, assigns a letter grade, and determines the class average. """

student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_averages = {}
for key in student_grades:
    student_averages[key] = sum(student_grades[key]) // len(student_grades[key])
print(student_averages)
student_letter_grades = {}
sum = 0
for key in student_averages:
    sum += student_averages[key]
    if student_averages[key] >= 90:
        student_letter_grades[key] = "A"
    elif student_averages[key] >= 80:
        student_letter_grades[key] = "B"
    elif student_averages[key] >= 70:
        student_letter_grades[key] = "C"
    elif student_averages[key] >= 60:
        student_letter_grades[key] = "D"
    else:
        student_letter_grades[key] = "F"

print(f"Class average is: {sum // len(student_grades)}")

for key in student_grades:
    print(f"Student's name: {key}, average grade: {student_averages[key]}, letter grade: {student_letter_grades[key]}")