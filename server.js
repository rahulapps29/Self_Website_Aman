const express = require("express");
const path = require("path");

const app = express();
const PORT = 4025;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Set up a route to render a webpage with a responsive image
app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Responsive Image</title>
            <style>
                img {
                    max-width: 100%;
                    height: auto;
                }
            </style>
        </head>
        <body>
            <h1>Responsive Image</h1>
            <img src="/image.jpg" alt="Responsive Example">
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
