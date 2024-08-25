const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  
  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: 'Data should be an array' });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const lowerCaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
  const highestLowerCaseAlphabet = lowerCaseAlphabets.length > 0
    ? [lowerCaseAlphabets.sort().slice(-1)[0]]
    : [];

  res.json({
    is_success: true,
    user_id: "Hitesh_050903",
    email: "hit123ram@gmail.com",
    roll_number: "21BCE9315",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowerCaseAlphabet
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
