import unittest
from game import determine_winner
from unittest.mock import patch
from game import rock_paper_scissors


class TestGame(unittest.TestCase):
    def test_determine_winner(self):
        self.assertEqual(determine_winner("rock", "scissors"), "You win!")
        self.assertEqual(determine_winner("rock", "rock"), "It's a tie!")
        self.assertEqual(determine_winner("rock", "paper"), "You lose!")

    @patch('builtins.input', side_effect=['rock', 'no'])
    @patch('random.choice', return_value='scissors')
    def test_rock_paper_scissors(self, mock_input, mock_choice):
        self.assertEqual(rock_paper_scissors(), "You chose rock, computer chose scissors. You win!")

if __name__ == "__main__":
    unittest.main()