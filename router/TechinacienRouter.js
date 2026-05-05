const express = require("express");
const router = express.Router();

const {
  posttech,
  updatetech,
  deletetech,
  gettech,  
} = require("../Controller/Techincaincontroller");

router.post("/technician", posttech);
router.get("/technician", gettech);
router.put("/technician/:id", updatetech);
router.delete("/technician/:id", deletetech);

module.exports = router;