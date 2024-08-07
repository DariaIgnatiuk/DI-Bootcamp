# Solve The Matrix

matrix = [["7","i","i"], ["T","s","x"], ["h","%","?"], ["i"," ","#"], ["s","M"," "], ["$","a"," "], ["#","t","%"], ["^","r","!"]]

def make_string():
    string = ""
    for i in range(len(matrix[0])):
        for j in range(len(matrix)):
            string += matrix[j][i]
    return string

def decode(message):
    decoded_message = ""
    for i in range(len(message)):
        char_number = ord(message[i])
        if (char_number > 65 and char_number < 91) or (char_number > 96 and char_number < 123):
            decoded_message += message[i]
        else:
            if len(decoded_message) != 0 and decoded_message[-1] != " ":
                decoded_message += " "
    return decoded_message


message = make_string()
decoded_message = decode(message)
print(decoded_message)


