const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware service to static files
app.use(express.static('src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(PORT, () => {
    console.log('Server is listening on port ${PORT}')
})