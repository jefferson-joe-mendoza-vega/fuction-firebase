const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/hello', (req, res) => {
    res.json({ message: '¡Hola, mundo desde Netlify Functions!' });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
