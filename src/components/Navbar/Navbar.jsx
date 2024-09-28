import './Navbar.css'

const Navbar = ({onSelect}) => {
  return (
    <>
      <nav className="navbar-container">
        <div className="navbar">
          <div className="title">
            <h1>
              pinch <span className="of-style text-stone-400">of</span> yum
            </h1>
          </div>
          <div className="nav-items">
            <ul className="nav-list text-lg">
              <li>
                <button className='uppercase' onClick={onSelect}>home</button>
              </li>
              <li>
                <a href="https://pinchofyum.com/about">About</a>
              </li>
              <li>
                <a href="https://pinchofyum.com/recipes">recipes</a>
              </li>
              <li>
                <a href="https://pinchofyum.com/start-here">start here</a>
              </li>
              <li>
                <a href="#">
                  <i className="material-icons">search</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
