const router = require("express").Router();
const nounRoutes = require("./nouns");
const verbRoutes = require("./verbs");
const adjectiveRoutes = require("./adjectives");

// Article routes
router.use("/nouns", nounRoutes);
router.use("/verbs", verbRoutes);
router.use("/adjectives", adjectiveRoutes);

module.exports = router;