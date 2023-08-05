import './taskInfo.css';
function TaskInfo({tasks}) {
    return (
        <div className="task-info">
            <label>Total task {tasks.length}</label>
            <label>Pending task</label>
            <label>Ejecuted task</label>
        </div>
    )
}
export default TaskInfo;
