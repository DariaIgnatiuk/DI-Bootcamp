def print_board(board):
    print("\nTIC TAC TOE")
    print("*****************")
    for i in range(0,3):
        print(f"*   {board[i][0]} | {board[i][1]} | {board[i][2]}   *")
        if i != 2:
            print("*  ---|---|---  *")
    print("*****************")

def player_input(player):
    print(f"Player {player}'s turn...")
    empty = True
    while empty:
        row = int(input("Enter row: "))
        column = int(input("Enter column: "))
        if board[row - 1][column - 1] == ' ':
            board[row - 1][column - 1] = player
            empty = False
        else:
            print("This spot is not empty. Try again")

def check_win(board):
    result = False
    for i in range(0,3):
        if board[i][0] == board[i][1] == board[i][2] != ' ':
            result = True
        if board[0][i] == board[1][i] == board[2][i] != ' ':
            result = True
    if board[0][0] == board[1][1] == board[2][2] != ' ':
        result = True
    if board[2][0] == board[1][1] == board[0][2] != ' ':
        result = True
    return result

def game (board):
    number_of_moves = 0
    player = "X"
    print("Welcome to TIC TAC TOE!")
    print_board(board)
    while number_of_moves < 9 and not check_win(board):
        number_of_moves += 1
        player_input(player)
        print_board(board)
        if check_win(board):
            print(f"{player} is a winner!")
        if player == "X":
            player = "O"
        else:
            player = "X"
    if number_of_moves == 9:
        print("It's a tie!")


board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]

game(board)
    

