const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const interviewRouter = require("./routes/interview.routes");


const app = express();

app.use(cookieParser());
app.use(express.json());


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
    "/api/interview",
    interviewRouter
);

app.get("/", (req, res) => {
  res.send("API is working");
});

// Routes
const authRouter = require("./routes/auth.routes");

app.use("/api/auth", authRouter);

module.exports = app;