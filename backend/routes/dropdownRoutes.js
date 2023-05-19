const { countryList } = require("../controller/dropdownController");

const router = require("express").Router();
router.get("/country-list", countryList);
module.exports = router;
