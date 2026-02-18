const request = require("supertest");
const app = require("../app");

// Test balance API
test("GET /balance should return balance", async () => {
  const res = await request(app).get("/balance");

  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty("balance");
});

// Test transfer API
test("POST /transfer should transfer money", async () => {
  const res = await request(app)
    .post("/transfer")
    .send({ amount: 100 });

  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Transfer successful");
});
