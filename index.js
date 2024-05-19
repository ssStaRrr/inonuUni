const express = require('express');
const app = express();
const {connectDB} = require("./DB/connectDB")
const multer = require('multer');

const path = require('path');

// Define the directory for serving static files (like HTML)
const publicDirectoryPath = path.join(__dirname, 'public')

// Set up middleware to serve static files from the 'public' directory
app.use(express.static(publicDirectoryPath));

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

//Routes
const userRoutes = require("./routes/user")
const indexRoutes = require("./routes/index")

// Set up multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});
app.use("/", indexRoutes)
app.use("/user", userRoutes)

connectDB().then((data)=>{
    console.log(data)
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
}) .catch(err => {
    console.log(err)
})
