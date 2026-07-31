const express = require("express");

const router = express.Router();

const {authUser} = require("../middlewares/auth.middleware");

const {
    generateInterview,
} = require("../controllers/interview.controller");

router.post(
    "/generate",
    authUser,
    generateInterview
);

module.exports = router;