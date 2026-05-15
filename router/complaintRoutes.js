

const express = require("express");
const router = express.Router();

const {
  postservice,
  updateservice,
  deleteservice,
  getservice,
  assignTechnician,
  getTechnicianJobs
} = require("../Controller/complaintController");

router.post("/complaint", postservice);
router.get("/complaint", getservice);
router.put("/complaint/:id", updateservice);
router.delete("/complaint/:id", deleteservice);

router.put(
 "/assign/:id",
 assignTechnician
);

router.get(
 "/complaint/technician/:techId",
 getTechnicianJobs
);

// router.put("/assign/:id", assignTechnician);

// router.get("/complaint/technician/:techId", getTechnicianJobs);

module.exports = router;


