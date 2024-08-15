from game import Game

results = {"won":0, "lost":0, "drew":0}

def get_user_menu_choice():
    print("\nMenu")
    print("(g) Play a new game\n(x) Show scores and exit")
    action = input(": ")
    return action

def print_results(results):
    print("Game Results:")
    print(f"  You won {results["won"]} times")
    print(f"  You lost {results["lost"]} times")
    print(f"  You drew {results["drew"]} times")

def main():
    action = "g"
    possible_actions = ["g", "x"]
    while action != "x":
        action = get_user_menu_choice()
        while action not in possible_actions:
            print("Error! Enter (g) or (x)")
            action = get_user_menu_choice()   
        if action != "x":
            game = Game()
            result = game.play()
            results[result] += 1
    print_results(results)

main()
