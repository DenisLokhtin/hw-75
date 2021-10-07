const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const cors = require('cors');

const password = "JdnfkKLdl";

app.use(cors());

const app = express();
const port = 8009;
const cipher = (message) => {
    return Vigenere.Cipher(password).crypt(message);
};

const decipher = (message) => {
   return  Vigenere.Decipher(password).crypt(message);
};

app.get('/encode/:message', (req, res) => {
    res.set({'Content-type': 'text/plain'}).send(cipher(req.params.message));
});

app.get('/decode/:message', (req, res) => {
    res.set({'Content-type': 'text/plain'}).send(decipher(req.params.message));
});


app.listen(port, () => {
    console.log('he is alive on ' + 'http://127.0.0.1:' + port);
});
