import React from "react";


function Logout() {
    const removeUserToken = () => {
        localStorage.removeItem("token");
        window.location = "/";
    }
  return (
      <li onClick={removeUserToken}>
          <img src="./img/icons/logout.svg" alt="logout" />
      </li>
  )
}

export default Logout;
