const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/ask', async (req, res) => {
    try {
        const { message } = req.body;

        const response = await axios.post(
            https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent
            { contents: [{ parts: [{ text: message }] }] }
        );

        const reply = response.data.candidates[0].content.parts[0].text;
        res.json({ reply });
    } catch (error) {
        console.error(JSON.stringify(error.response?.data));
        res.status(500).json({ error: error.response?.data || error.message });
    }
});

app.listen(process.env.PORT || 3000, () => console.log('Server running!'));