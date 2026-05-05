const express = require("express");
const router = express.Router();

const {
  postservice,
  updateservice,
  deleteservice,
  getservice
} = require("../Controller/complaintController");

router.post("/complaint", postservice);
router.get("/complaint", getservice);
router.put("/complaint/:id", updateservice);
router.delete("/complaint/:id", deleteservice);

module.exports = router;