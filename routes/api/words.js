const router = require("express").Router();
const wordController = require("../../controllers/wordController");

// Matches with "/api/words"
router.get("/", wordController.findAll);
router.post("/addword", wordController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(wordController.findById)
  .delete(wordController.remove);

router.route("/nouns")
  .get(wordController.findAllNouns)

router.route("/verbs")
  .get(wordController.findAllVerbs)

router.route("/adjectives")
  .get(wordController.findAllAdjectives)

// router.route("/addWord", function() {
//   console.log("inside route")
//   })
//   .post(wordController.create)

module.exports = router;