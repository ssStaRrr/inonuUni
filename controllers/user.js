const User = require("../models/user")

const registerUser = async(req,res) => {

    try {
        const uploadedFile = req.file;

        if (!uploadedFile) {
            return res.status(400).send('No file uploaded');
        }

        // Convert uploaded file data to Buffer
        const pdfData = uploadedFile.buffer;

        // Create a new PDF document and save it to MongoDB
        console.log(req.body)
        const newUser = new User({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            identificationNumber: req.body.identificationNumber,
            tez: pdfData
        });
        await newUser.save();

        res.send('File uploaded successfully');
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).send('Error uploading file');
    }
}

const getUser = async(req,res) => {
    console.log(req.param._id, "hiiiiii")
    const user = await User.findById(req.param.id)

     // Send the PDF file data as response
     res.setHeader('Content-Type', 'application/pdf');
    
     res.send("you are in getUser controller")
     //res.send(user.tez);
}

module.exports = {
    registerUser,
    getUser
}