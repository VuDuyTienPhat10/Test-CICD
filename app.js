const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello CI/CD 1/6/2025 4h48 : childrens day');
});

app.get('/test', (req, res) => {
  res.send('Test 1/6/2025 4h50');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
