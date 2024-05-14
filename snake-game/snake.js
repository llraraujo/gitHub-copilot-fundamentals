// Get the canvas and context
let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

// Define the size of each square on the grid
let box = 32;
let score = 0;

// Initialize the snake to start in the middle of the canvas
let snake = [];
snake[0] = { x: 8 * box, y: 8 * box };

// Initialize the obstacles
let obstacles = [
    { x: 5 * box, y: 7 * box },
    { x: 8 * box, y: 10 * box },
    { x: 13 * box, y: 3 * box },
    // Add more obstacles as needed
];


// Set the initial direction of the snake
let direction = "right";

// Create the food at a random location
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

// Function to draw the background
function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

// Function to draw the snake
function createSnake() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// Function to draw the obstacles
function drawObstacles() {
    context.fillStyle = "blue";
    for(let i = 0; i < obstacles.length; i++) {
        context.fillRect(obstacles[i].x, obstacles[i].y, box, box);
    }
}

// Function to draw the food
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

function drawScore() {
    context.fillStyle = "white";
    context.font = "16px Arial";
    context.fillText("Score: " + score, box, box);
}


// Event listener to update the direction based on arrow key presses
document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}

function initGame() {
    // Initialize the game variables
    let snake = [{ x: 9 * box, y: 10 * box }];
    let score = 0;
    let food = {
        x: Math.floor(Math.random() * 15 + 1) * box,
        y: Math.floor(Math.random() * 15 + 1) * box
    };
    let direction;

    // Start the game loop
    let game = setInterval(startGame, 100);
}


// Main game loop
function startGame() {
    // If the snake hits the edge of the canvas, wrap around to the other side
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    // If the snake runs into itself, end the game
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game);
            alert('Game Over :(');
        }
    }    

    // Draw the game elements
    createBG();
    createSnake();
    drawFood();
    drawObstacles();
    drawScore();

    // Move the snake in the current direction
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    // Check for collisions with obstacles
    for(let i = 0; i < obstacles.length; i++) {
        if(snakeX == obstacles[i].x && snakeY == obstacles[i].y) {
            clearInterval(game);
            alert('You hit an obstacle! Game Over :(');
        }
    }

    // If the snake eats the food, generate a new piece of food and grow the snake
    // Otherwise, move the snake by removing the last segment
    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
        score++;
    }

    // Add a new head to the snake
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
    
}

// Start the game loop
let game = setInterval(startGame, 100);