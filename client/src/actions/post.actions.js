import axios from "axios";

// posts
export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {
  return async (dispatch) => {
    try {
        const res = await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/post/`,
        });
        dispatch({type: GET_POSTS, payload: res.data })
    } catch (e) {
        console.log(e);
    }
  };
};
