import './valuecounter.css';
function ValueCount({ countValue, setCountValue }) {

    function handleChange(e) {
        const value = [e.target.name] = e.target.value
        setCountValue(value);
    }

    return (
        <div className="value-counter">
            <label htmlFor="count-value">Increase or decrease in</label>
            <input type="number" name="count-value" value={countValue} onChange={handleChange} />
        </div>
    )
}
export default ValueCount;
