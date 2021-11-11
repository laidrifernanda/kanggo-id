const express = require("express");

const productAct = require("../controllers/product");

const router = express.Router();

router.get("/", productAct.getproduct);
router.get("/:id", productAct.getspecProduct);
router.post("/", productAct.createproduct);
router.patch("/:id", productAct.updateproduct);
router.delete("/:id", productAct.deleteproduct);

module.exports = router;
