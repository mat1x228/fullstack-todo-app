const express = require('express');
const router = express.Router()
module.exports = router;

//POST 
router.post('/post', (req, res) => {
  res.send('POST')
});

//GET ALL
router.get('/getAll', (req,res)=>{
  res.send('GET ALL')
});

//UPDATE
router.patch('/update/:id', (req,res)=>{
  res.send('UPDATE')
});

//DELETE
router.delete('/delete/:id', (req, res) => {
  res.send('DELETE')
})