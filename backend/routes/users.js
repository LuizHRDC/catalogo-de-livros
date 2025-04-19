const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController"); 

const {
  registerUser,
  loginUser,
  upgradeUser,
  updateUser, 
} = require("../controllers/usersController");

router.put("/downgrade/:id", usersController.downgradeUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/upgrade/:id", upgradeUser);
router.put("/update/:id", updateUser);


module.exports = router;
