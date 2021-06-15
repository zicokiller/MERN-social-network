import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";

export const getUser = (uid) => {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.get(`${process.env.REACT_APP_API_URL}api/user/${uid}`);
    } catch (e) {
      return console.error(e);
    }
    dispatch({type: GET_USER, payload: res.data})
  };
};

// export const uploadPicture = (data, id) => {
//   return (dispatch) => {
//     return axios
//       .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
//       .then((res) => {
//           return axios
//             .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
//             .then((res) => {
//               dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
//             });
        
//       })
//       .catch((err) => console.log(err));
//   };
// };


export const uploadPicture = (data, id) => {
  return async (dispatch) => {
      try {
          await axios.post(`${process.env.REACT_APP_API_URL}api/user/upload`, data);
          const res = await axios.get(`${process.env.REACT_APP_API_URL}api/user/${id}`);
          dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
      } catch (e) {
          // Attention ici je l'ai mis dans le catch mais sa request doit renvoyer des codes 200 partout vu le code original
          console.log(e);
      }
  }
};

export const updateBio = (userId, bio) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`${process.env.REACT_APP_API_URL}api/user/` + userId, bio);
    } catch (e) {
      console.log(e);
    }
    dispatch({type: UPDATE_BIO, payload: bio})

  }
}


