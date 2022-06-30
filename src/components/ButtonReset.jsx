function ButtonReset({handleReset}){
    return(
        <button className='button' type="submit" name="reset" onClick={handleReset}>- Reset counter</button>
    )
}
export default ButtonReset;