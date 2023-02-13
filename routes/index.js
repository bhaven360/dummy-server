const router = require("express").Router();
const OperationsController = require("../controller/OperationsController");

// GET Requests
router.get('/get-all', OperationsController.getAll);

// POST Requests
router.post('/create-new', OperationsController.createData);
router.post('/update', OperationsController.update_data);

router.delete('/delete', OperationsController.deleteData);

module.exports = router;
