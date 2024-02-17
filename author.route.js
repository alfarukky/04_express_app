const express = require('express');
const router = express.Router();

//get all authors
router.get('/', (req, res) => {
  res.send('all the authors in the collection');
});

router.get('/:id', (req, res) => {
  console.log(req.params);
  res.send('get author by id ' + req.params.id);
});

router.post('/', (req, res) => {
  res.send('New author added to the collection');
});

router.put('/:id', (req, res) => {
  res.send('author info updated');
});

router.delete('/:id', (req, res) => {
  res.send('author deleted from collection');
});

module.exports = router;
