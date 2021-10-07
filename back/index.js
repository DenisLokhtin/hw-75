const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const cors = require('cors');

const app = express();
const port = 8009;
app.use(cors());
app.use(express.json());
const cipher = (message, password) => {
    return Vigenere.Cipher(password).crypt(message);
};

const decipher = (message, password) => {
    return Vigenere.Decipher(password).crypt(message);
};

app.post('/encode/', (req, res) => {
    res.set({'Content-type': 'application/json'}).send({encoded: cipher(req.body.message, req.body.password)});
});

app.post('/decode/', (req, res) => {
    res.set({'Content-type': 'application/json'}).send({decoded: decipher(req.body.message, req.body.password)});
});


app.listen(port, () => {
    console.log('he is alive on ' + 'http://127.0.0.1:' + port);
});
