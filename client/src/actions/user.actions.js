import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const getUser = (uid) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/user/${uid}`,
      });

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
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/upload`,
        data,
      });
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/user/${id}`,
      });

      dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateBio = (userId, bio) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/user/` + userId,
        data: { bio },
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
      await axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/user/follow/` + followerId,
        data: { idToFollow },
      });
      dispatch({ type: FOLLOW_USER, payload: { idToFollow } });
    } catch (e) {
      console.log(e);
    }
  };
};

export const unfollowUser = (followerId, idToUnfollow) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/user/unfollow/` + followerId,
        data: { idToUnfollow },
      });
      dispatch({ type: UNFOLLOW_USER, payload: { idToUnfollow } });
    } catch (e) {
      console.log(e);
    }
  };
};

/*export const unfollowUser = (followerId, idToUnfollow) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/unfollow/` + followerId,
      data: { idToUnfollow },
    })
      .then((res) => {
        dispatch({ type: UNFOLLOW_USER, payload: { idToUnfollow } });
      })
      .catch((err) => console.log(err));
  };
}; */
