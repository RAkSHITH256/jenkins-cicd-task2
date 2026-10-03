const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Jenkins CI/CD Pipeline!",
        status: "success"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

module.exports = app;
