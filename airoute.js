const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');
const authenticateToken = require('../middlewares/auth');
require('dotenv').config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

router.post('/generate-guide', authenticateToken, async (req, res) => {
  try {
    const { title, content, subject, focusAreas } = req.body;
    
    const prompt = `Create a comprehensive study guide based on the following notes:
    
    Title: ${title}
    Subject: ${subject}
    Focus Areas: ${focusAreas.join(', ')}
    
    Notes Content:
    ${content}
    
    Please organize the study guide with clear sections, key points, summaries, and any relevant examples or mnemonics that would help with memorization. Include a summary at the beginning and review questions at the end.`;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful study assistant that creates well-organized, easy-to-understand study guides." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
    });
    
    res.json({
      guide: completion.choices[0].message.content
    });
    
  } catch (err) {
    console.error('AI generation error:', err);
    res.status(500).json({ message: 'Error generating study guide' });
  }
});

module.exports = router;