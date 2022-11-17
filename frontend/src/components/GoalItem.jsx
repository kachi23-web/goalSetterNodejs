import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import {FaEdit} from 'react-icons/fa'


function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
      <button onClick={() => dispatch(updateGoal(goal._id))} className='edit'>
        < FaEdit/>
      </button>
    </div>
  )
}

export default GoalItem
