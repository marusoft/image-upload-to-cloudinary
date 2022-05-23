const router = require("express").Router();
const upload = require("../utils/multer");

const createUser  = require("../controller/user");

router.post("/", upload.single("image"), createUser);


module.exports = router;
