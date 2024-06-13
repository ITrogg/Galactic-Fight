const express = require("express");

const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations
const itemActions = require("./controllers/itemActions");

// Route to get a list of items
router.get("/items", itemActions.browse);

router.get("/planets", (req, res) => {
  client.query("SELECT * FROM planets").then(([planets]) => {
    res.status(200).json(planets);
  });
});

// Route to get a specific item by ID
router.get("/items/:id", itemActions.read);

// Route to add a new item
router.post("/items", itemActions.add);

/* ************************************************************************* */

module.exports = router;
