var router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send(JSON.stringify(process.env)); 
});

router.get('/health', (req, res, next) => {
  res.sendStatus("200");
})

router.use('/api', require('./api'));

module.exports = router;
