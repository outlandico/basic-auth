// index.js

const app = require('./src/app'); // Assuming your app.js is in the src folder

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
