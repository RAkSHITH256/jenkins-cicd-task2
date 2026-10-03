const test = require("node:test");
const assert = require("node:assert");
const request = require("supertest");

const app = require("../app");

test("GET / should return success message", async () => {
    const response = await request(app).get("/");

    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(response.body.status, "success");
});

test("GET /health should return healthy status", async () => {
    const response = await request(app).get("/health");

    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(response.body.status, "healthy");
});
