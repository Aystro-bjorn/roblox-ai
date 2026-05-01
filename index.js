const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/ask', async (req, res) => {
    const { message } = req.body;

    const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_KEY}`,
        { contents: [{ parts: [{ text: message }] }] }
    );

    const reply = response.data.candidates[0].content.parts[0].text;
    res.json({ reply });
});

app.listen(3000, () => console.log('Server running on port 3000'));
