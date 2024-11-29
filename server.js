const express = require("express");
const path = require("path");

const app = express();
const PORT = 4025;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Default route to serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
