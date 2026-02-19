const express = require("express");
const app = express();

app.use(express.json());

let balance = 1000;

// Balance API
app.get("/", (req, res) => {
  res.json("api live");
});
app.get("/balance", (req, res) => {
  res.json({ balance });
});

// Transfer API
app.post("/transfer", (req, res) => {
  const { amount } = req.body;

  if (amount > balance) {
    return res.status(400).json({ message: "Insufficient funds" });
  }

  balance -= amount;
  res.json({ message: "Transfer successful", balance });
});



module.exports = app;

/*
  Start server ONLY if file run directly
  (Not during Jest testing)
*/
if (require.main === module) {
  app.listen(3000, () => {
    console.log("Banking app running on port 3000");
  });
}
