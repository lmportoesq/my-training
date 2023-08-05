import { useState } from 'react';
import ButtonAdd from '../../components/counter/ButtonAdd';
import ButtonLess from '../../components/counter/ButtonLess';
import ButtonReset from '../../components/counter/ButtonReset';
import Counter from '../../components/counter/Counter';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import GoBack from "../../components/go-back/GoBack";
import ValueCount from '../../components/counter/value-counter/ValueCount'
import './counterPage.css';

function CounterPage() {
  const [count, setCount] = useState(0);
  const [active, setActive]=useState(true);
  const [countValue, setCountValue]=useState(1);

  function handleAdd() {
    setCount(count + parseInt(countValue) );
    setActive(false);
  }
  function handleLess() {
    setCount(count - countValue);
    if(count===1){
      setActive(true);
    }
  }
  function handleReset() {
    setCount(0);
    setActive(true);
  }

  return (
    <>
      <Header />
      <Container title='Counter'>
        <div className='counter'>
          <Counter counter={count} />
          <div className="counter__actions">
            <ButtonAdd handleAdd={handleAdd} />
            <ButtonLess handleLess={handleLess} active={active} />
            <ButtonReset handleReset={handleReset} active={active} />
          </div>
        </div>
        <div>
          <ValueCount countValue={countValue} setCountValue={setCountValue}/>
        </div>
        <GoBack />
      </Container>
      <Footer />
    </>
  );
}

export default CounterPage;
