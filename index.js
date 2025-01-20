const express = require('express');
const app = express();

// Simple route for the root
app.get('/', (req, res) => {
  res.json({
    msg: 'Hello World!',
    app_version: '1'
  });
});

app.get('/add/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const sum = add(a, b);
  res.json({ sum });
});

function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Invalid Input";
  }

  a = parseInt(a);
  b = parseInt(b);
  return a + b;
}

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}


module.exports = app;
module.exports.add = add;