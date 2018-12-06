const router = require("express").Router();
const wordController = require("../../controllers/wordController");

// Matches with "/api/articles"
router.route("/")
  .get(wordController.findAll)
  .post(wordController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(wordController.findById)
  .delete(wordController.remove);

module.exports = router;