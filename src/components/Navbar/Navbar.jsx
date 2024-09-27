import './Navbar.css'

const Navbar = () => {
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
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">recipes</a>
              </li>
              <li>
                <a href="#">start here</a>
              </li>
              <li>
                <a href="#">
                  <i class="material-icons">search</i>
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
