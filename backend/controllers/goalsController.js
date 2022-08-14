// @desc Get goals
// @route GET/api/goals
// @access Private
const getGoals = (req,res) => {
    res.status(200).json({message: 'Get goals'} )
}

// @desc Set goals
// @route SET/api/goals
// @access Private
const setGoal = (req,res) => {
    //get the body data ;error handling
  if(!req.body.text){
      res.status(400)
      throw new Error('Please add a textfield')
  }else{
   res.status(200).json({message:'set goal'})
  }
}

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req,res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal, 
    updateGoal,
    deleteGoal
}

module.exports  