const router = require("express").Router();
const verbController = require("../../controllers/verbController");

// Matches with "/api/articles"
router.route("/")
  .get(verbController.findAll)
  .post(verbController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(verbController.findById)
  .delete(verbController.remove);

module.exports = router;