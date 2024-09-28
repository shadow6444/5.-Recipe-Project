import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="heading text-center">
        <h3>
          <span className="heading-style1">simple recipes made for</span>
          <span className="heading-style2 font-thin">
            real, actual, everyday life.
          </span>
        </h3>
      </div>
      <div className="search-container">
        <div className="search">
          <input type="text" className="search-input" placeholder="Search for a recipe"/>
          <button>
            <i className="material-icons">search</i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
