const express = require('express');
const router = express.Router();
const { getListings, addListing } = require('../controllers/listingController');

router.get('/', getListings);
router.post('/', addListing);

module.exports = router;
