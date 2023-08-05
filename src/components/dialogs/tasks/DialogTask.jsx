import './dialogTask.css';
function DialogTask({title}) {
    return (
        <div className="dialog-task">
            <div>
                <h1>{title}</h1>
                <hr />
            </div>
            <div className="input">
                <label htmlFor="Description"></label>
                <input className='input__text' type="text" name='description' />
            </div>
            <div className="input">
                <label htmlFor="Finish"></label>
                <input className='input__text' type="checkbox" name='Finish' />
            </div>
        </div>
    )
}
export default DialogTask;
