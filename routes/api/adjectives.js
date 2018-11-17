const router = require("express").Router();
const adjectiveController = require("../../controllers/adjectiveController");

// Matches with "/api/articles"
router.route("/")
  .get(adjectiveController.findAll)
  .post(adjectiveController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(adjectiveController.findById)
  .delete(adjectiveController.remove);

module.exports = router;