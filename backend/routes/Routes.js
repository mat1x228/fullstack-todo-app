const express = require('express');
const router = express.Router();
const model = require('../model/Model');
module.exports = router;

//ADD TASK
router.post('/post', async(req, res) => {
  const data = new model({
    task: req.body.task,
    isCompleted: req.body.isCompleted
  })
  try{
    const saveData = await data.save();
    res.status(200).json(dataToSave)

  }
  catch(error){
    res.status(400).json({message: error.message})

  }
});

//GET ALL TASKS
router.get('/getAll', async (req,res)=>{
  try{
    const data = await Model.find();
    res.json();
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
});

//IS COMPLETED
router.patch('/update/:id', (req,res)=>{
  res.send('UPDATE')
});

//DELETE TASK
router.delete('/delete/:id', (req, res) => {
  res.send('DELETE')
})