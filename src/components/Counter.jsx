import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function Counter() {
  const [count, setCount]=useState(0);

  function handleClickAdd() {
    setCount(count+1);
  }

  function handleClickLess() {
    if(count>0){
      setCount(count-1);
    }else{
      alert('Contador llegó a cero...')
    }
  }
  function handleClickBack(){
    window.location.href='/';
  }

  return (
    <div>
      <Header />
      <div className="card">
        <h1>Counter training</h1>
        <hr />
        <button className='button' type="submit" name="add" onClick={handleClickAdd}>+ Increase</button>
        <button className='button' type="submit" name="less" onClick={handleClickLess}>- Decrease</button>
        <button className='button' type="submit" name="reset" onClick={()=>setCount(0)}>- Reset counter</button>
        <h2>The counter value is {`${count}`}</h2>
        <button className='button-back' onClick={handleClickBack}>Go back</button>
      </div>
      <Footer />
    </div>
  )
}
export default Counter;
