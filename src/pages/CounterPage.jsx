import { useState } from 'react';
import ButtonAdd from '../components/ButtonAdd';
import ButtonLess from '../components/ButtonLess';
import ButtonReset from '../components/ButtonReset';
import Counter from '../components/counter/Counter';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function CounterPage() {
  const [count, setCount] = useState(0);
  
  function handleAdd() {
    setCount(count + 1);
  }
  function handleLess() {
    setCount(count - 1);
  }
  function handleReset() {
    //setCount(count=0);
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
        <Counter counter={count} />
        <div>
          <ButtonAdd handleAdd={handleAdd} />
          <ButtonLess handleLess={handleLess} />
          <ButtonReset handleReset={handleReset} />
        </div>
        <button className='button-back' onClick={handleClickBack}>Go back</button>
      </div>
      <Footer />
    </div>
  );
}

export default CounterPage;
