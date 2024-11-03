// const express = require('express');
// const router = express.Router();
// const contactController = require('../controllers/contactController');

// router.get('/contacts', contactController.list);
// router.get('/contacts/:id', contactController.contactGet);
// router.post('/contacts', contactController.create);
// router.put('/contacts/:id', contactController.update);
// router.delete('/contacts/:id', contactController.remove);

// module.exports = router;

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController'); // Ensure this path is correct

// Define routes for contacts
router.get('/list', contactController.list);
router.get('/get/:contactsID', contactController.contactGet);
router.post('/create', contactController.create);
router.put('/edit/:contactsID', contactController.update);
router.delete('/delete/:contactsID', contactController.remove);

module.exports = router;