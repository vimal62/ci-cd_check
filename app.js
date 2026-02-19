const express = require("express");
const app = express();

app.use(express.json());

let balance = 1000;

// Root route
app.get("/", (req, res) => {
  res.json("api live");
});

// Balance API
app.get("/balance", (req, res) => {
  res.json({ balance });
});

// Transfer API
app.post("/transfer", (req, res) => {
  const { amount } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  balance -= amount;

  res.json({ message: "Transfer successful", balance });
});

// Export app for testing
module.exports = app;

// Start server only if run directly
const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Banking app running on port ${PORT}`);
  });
}
