const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Filled rectangle
ctx.fillStyle = 'green'; // Set the fill color
ctx.fillRect(10, 10, 150, 100); // (x, y, width, height)

// Stroked rectangle
ctx.strokeStyle = 'red'; // Set the stroke color
ctx.lineWidth = 5; // Set the line width
ctx.strokeRect(200, 10, 150, 100); // (x, y, width, height)

