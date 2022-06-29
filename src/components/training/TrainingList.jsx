import { NavLink } from 'react-router-dom';
function Home(){
    return(
      <div className='card'>
        <h1>Training list</h1>
        <hr />
        <div>
          <ul>
            <li><NavLink className="navlink" to = "/counter">Counter by props</NavLink></li>
            <li><NavLink className="navlink" to = "/task">Task</NavLink></li>
            <li><NavLink className="navlink" to = "/redux-counter">Redux counter</NavLink></li>
          </ul>
        </div>
      </div>
    )
}
export default Home;
