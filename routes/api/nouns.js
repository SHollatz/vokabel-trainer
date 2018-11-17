const router = require("express").Router();
const nounController = require("../../controllers/nounController");

// Matches with "/api/articles"
router.route("/")
  .get(nounController.findAll)
  .post(nounController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(nounController.findById)
  .delete(nounController.remove);

module.exports = router;