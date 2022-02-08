const { Router } = require('express');
const { index, store, update, deleteUser, patch } = require('../controllers/UserController');

const router = Router();

router.get('/', index);
router.post('/', store);
router.put('/:id', update);
router.delete('/', deleteUser);
router.patch('/', patch);


module.exports = router;