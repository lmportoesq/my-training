import './task.css';
import ListTask from './listTask/ListTask';
import TaskInfo from '../task/TaskInfo/TaskInfo';
// <div className="container-add">
//    <button className='container-add__link' onClick={handleClick}>+</button>
//</div>

function Task({ tasks }) {
    return (
        <div className='container-tasks'>
            <div className='container-tasks__list'>
                {tasks.map(task => (
                    <ListTask task={task} />
                ))}
            </div>
            <div className='container-tasks__info'>
                <TaskInfo tasks={tasks} />
            </div>
        </div>
    )
}

export default Task;
