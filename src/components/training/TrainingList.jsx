import { NavLink } from 'react-router-dom';
import './trainingList.css';
function TrainingList() {
  return (
    <div>
      <ul>
        <li><NavLink className="navlink" to="/counter">Counter</NavLink></li>
        <li><NavLink className="navlink" to="/tasks">Task</NavLink></li>
        <li><NavLink className="navlink" to="/redux-counter">Redux counter</NavLink></li>
      </ul>
    </div>
  )
}
export default TrainingList;
