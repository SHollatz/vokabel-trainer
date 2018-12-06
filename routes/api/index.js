const router = require("express").Router();
const wordRoutes = require("./words");

// word routes
router.use("/words", wordRoutes)
router.use("/nouns", wordRoutes);
router.use("/verbs", wordRoutes);
router.use("/adjectives", wordRoutes);

module.exports = router;