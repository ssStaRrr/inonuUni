const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

// Define the directory for serving static files (like HTML)
const publicDirectoryPath = path.join(__dirname, 'public')

// Set up middleware to serve static files from the 'public' directory
app.use(express.static(publicDirectoryPath));

// Middleware
app.use(express.json()); // Parse JSON bodies

//Routes
const userRoutes = require("./routes/user")
const indexRoutes = require("./routes/index")

app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});
app.use("/", indexRoutes)
app.use("/user", userRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });