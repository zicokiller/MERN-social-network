import React, { useState, useEffect } from "react";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let res;
      try {
        res = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}jwtid`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      } catch (e) {
        return console.error("No token");
      }
      if (res.status != 200) return console.error("No token");
      setUid(res.data);
      dispatch(getUser(res.data));
    })();
  }, [uid, dispatch]);
  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
