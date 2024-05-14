const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

//load env variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

//body parser middleware
app.use(bodyParser.json());

// mongodb connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
})
.then(() => console.log('mogodb connected :D'))
.catch(err => console.log(err));

//Email Schema
const EmailSchema = new mongoose.Schema({
    email: String,
    zipcode: String
});

// Email Model
const Email = mongoose.model('Email', EmailSchema);

//Routes
app.post('/submit', async (req, res) => {
    console.log('recieved data:', req.body);
    const {email, zipcode} = req.body;
    try {
        let emailEntry = new Email({ email, zipcode });
        await emailEntry.save();
        res.status(201).send('Email and Zipcode Successfuly Saved');
        console.log(`saved ${email} and ${zipcode}`)
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Serve static files from the src directory
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
