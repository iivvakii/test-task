const { Router } = require('express');
const controller = require('./controller');


const router = new Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.post('/', controller.addUser);
router.delete('/:id', controller.deleteUser);
router.put('/:id', controller.updateUser);

module.exports = router;