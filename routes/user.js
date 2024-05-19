const {registerUser, getUser} = require("../controllers/user")

const express = require('express');
const router = express.Router();
const multer = require('multer');

// Set up multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/register",upload.single('pdf') , registerUser)
router.get("/:id", getUser)

module.exports = router;
