import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const getUser = (uid) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}api/user/${uid}`
      );
      dispatch({ type: GET_USER, payload: res.data });
    } catch (e) {
      console.error(e);
    }
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
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}api/user/${id}`
      );
      dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateBio = (userId, bio) => {
  return async (dispatch) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}api/user/` + userId, {
        bio,
      });
      dispatch({ type: UPDATE_BIO, payload: bio });
    } catch (e) {
      console.log(e);
    }
  };
};

export const followUser = (followerId, idToFollow) => {
  return async (dispatch) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}api/user/follow/` + followerId,
        { idToFollow }
      );
      dispatch({ type: FOLLOW_USER, payload: idToFollow });
    } catch (e) {
      console.log(e);
    }
  };
};

export const unfollowUser = (followerId, idToUnfollow) => {
  return async (dispatch) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}api/user/unfollow/` + followerId,
        { idToUnfollow }
      );
      dispatch({ type: UNFOLLOW_USER, payload: idToUnfollow });
    } catch (e) {
      console.log(e);
    }
  };
};
