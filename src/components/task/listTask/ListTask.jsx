import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import './listTask.css';

function ListTask({ task }) {
    return (
        <div className="task-list">
            <div className='task-list__items' >
                <div className='task-list__text'>
                    <ol>
                        <li>{task.description} {task.finish}</li>
                    </ol>
                </div>
                <div className='task-list__actions'>
                    <PencilSquareIcon className='edit-icon' />
                    <TrashIcon className='delete-icon' />
                </div>
            </div>
        </div>
    )
}
export default ListTask;
