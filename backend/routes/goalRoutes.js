const express = require('express')
const router = express.Router()
const {getGoals, setGoal,updateGoal, deleteGoal} = require('../controllers/goalsController')
const {protect} = require('../middleware/authmiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect,updateGoal).delete(protect,deleteGoal)



module.exports = router   