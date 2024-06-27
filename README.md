# Rock-Paper-Scissor

This is a simple Rock Paper Scissors game implemented using HTML, CSS, and JavaScript. Players can choose between Rock, Paper, or Scissors to play against the computer, which makes a random choice. The game tracks the number of wins, losses, ties, and total moves. The score is saved in the browser's local storage.

## Features

- **Play Rock Paper Scissors:** Choose between Rock, Paper, or Scissors to play against the computer.
- **Score Tracking:** The game keeps track of wins, losses, ties, and total moves.
- **Persistent Score:** The score is saved in the browser's local storage and loaded when the game is opened.
- **Auto Play:** An automatic play mode where the computer plays the game by itself every second.
- **Reset Score:** Option to reset the score.

## Files

- `index.html`: The main HTML file that contains the structure of the game.
- `style.css`: The CSS file that styles the game.
- `script.js`: The JavaScript file that contains the game logic.
- `img/`: A directory containing the images used for the game buttons.

## How to Run

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/rock-paper-scissors.git
    cd rock-paper-scissors
    ```

2. **Open the `index.html` file in your web browser:**

    You can simply double-click the `index.html` file or use a local server to run it.

3. **Play the Game:**

    - Click on the Rock, Paper, or Scissors button to make a move.
    - Click on the `Reset` button to reset the score.
    - Click on the `Auto Play` button to start or stop the automatic play mode.

## Game Logic

- **Random Move Generation:**

    The computer's move is determined randomly using `Math.random()`.

- **Result Determination:**

    The game checks the player's move against the computer's move to determine the result (win, lose, or tie).

- **Score Update:**

    The score is updated based on the result of each round and saved to local storage.

## CSS Styling

- The game uses flexbox for layout and positioning.
- Buttons have hover and active states for a better user experience.
- The game has a dark theme with modern styling.

## JavaScript Functionality

- **Event Listeners:** Added to the buttons for player interaction.
- **Local Storage:** Used to save and load the game score.
- **Auto Play:** Uses `setInterval` to simulate automatic gameplay.



