import React, { useContext } from "react";
import { NavLink as Link } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";
import { useSelector } from "react-redux";

function Navbar() {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link exact to="/">
            <div className="logo">
              <img src="./img/icon.png" alt="icon" />
              <h3>Raccoont</h3>
            </div>
          </Link>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <Link exact to="/profil">
                <h5>Bienvenue { userData.pseudo }</h5>
              </Link>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <Link exact to="/profil">
                <img src="./img/icons/login.svg" alt="login" />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
