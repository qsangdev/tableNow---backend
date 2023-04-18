const express = require("express");
const router = express.Router();
const RatingController = require("../controllers/RatingController");

router.post("/create", RatingController.createRating);
router.get("/getAll", RatingController.getAllRating);
router.get("/get-details/:id", RatingController.getDetailsRating);

module.exports = router;
