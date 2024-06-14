import { useState } from "react";
import { Link } from "react-router-dom";
import ship from "../../assets/images/ship.png";

function Nav() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleClearLocal = () => {
    localStorage.clear();
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <section>
      <button type="button" onClick={toggleDropdown}>
        <img src={ship} alt="Vaisseau spacial" />
      </button>
      {isDropdownVisible && (
        <div>
          <nav>
            <Link className="button-style" to="/planetes">
              Retour
            </Link>
            <button
              className="button-style button-story"
              onClick={handleClearLocal}
              type="button"
            >
              clear
            </button>
          </nav>
        </div>
      )}
    </section>
  );
}

export default Nav;
