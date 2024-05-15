# create a simple rock, paper, scissors game
# provide a welcome message
# get the user's choice
# get the computer's choice
# compare the two choices
# print the results
# ask the user if they want to play again
# say goodbye and end the game
# use one function for the game logic

import random

def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        return "It's a tie!"
    elif (user_choice == "rock" and computer_choice == "scissors") or \
         (user_choice == "paper" and computer_choice == "rock") or \
         (user_choice == "scissors" and computer_choice == "paper"):
        return "You win!"
    else:
        return "You lose!"

def rock_paper_scissors():
    while True:
        user_choice = input("Enter your choice (rock, paper, or scissors): ")
        choices = ["rock", "paper", "scissors"]
        computer_choice = random.choice(choices)
        result = determine_winner(user_choice, computer_choice)
        result_string = f"You chose {user_choice}, computer chose {computer_choice}. {result}"
        print(result_string)

        play_again = input("Do you want to play again? (yes/no): ")
        if play_again.lower() != "yes":
            return result_string

rock_paper_scissors()