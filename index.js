// index.js
const express = require('express');
const app = express();

// Simple route for the root
app.get('/', (req, res) => {
  res.json({
    msg: 'Hello World Rizon String Concatenation Service',
    app_version: '1.2'
  });
});

app.get('/concat/:str1/:str2', (req, res) => {
  const { str1, str2 } = req.params;
  const result = concatenate(str1, str2);
  res.json({ result });
});

function concatenate(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return "Invalid Input";
  }
  return str1 + str2;
}

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}

module.exports = app;
module.exports.concatenate = concatenate;
