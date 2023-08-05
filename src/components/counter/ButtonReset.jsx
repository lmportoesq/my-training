function ButtonReset({handleReset, active}){
    return(
        <button className='button' type="submit" name="reset" disabled={active} onClick={handleReset}>- Reset counter</button>
    )
}
export default ButtonReset;