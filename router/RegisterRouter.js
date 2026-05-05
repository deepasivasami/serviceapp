const express = require("express");
const router = express.Router();

const {
  postreg,
  updatereg,
  deletereg,
  getreg,
  loginUsers
} = require("../Controller/Registercontroller");


router.post("/register", postreg);


// router.get("/register", getreg);
router.get("/users", getreg);


router.put("/register/:id", updatereg);


router.delete("/register/:id", deletereg);

router.post("/login",loginUsers)

module.exports = router;

