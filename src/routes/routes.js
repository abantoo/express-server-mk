import express from "express";

const router = express.Router();

const postController = require("../controller/postController");

router.get("/", postController.getAllMotivations);

router.post("/", postController.addMotivation);

module.exports = router;
