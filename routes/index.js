const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Vienbenido a minecraft api by MarcosArturoLG'));

router.post('/minecraft', controllers.createUser);
router.get('/minecraft', controllers.getAllUsers);

module.exports = router;