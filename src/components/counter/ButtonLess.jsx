function ButtonLess ({handleLess, active}){
    return(
        <button className='button' type="submit" name="less" disabled={active} onClick={handleLess}>- Decrease</button>
    )
}
export default ButtonLess;
