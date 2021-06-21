import axios from "axios";

export const GET_USERS = "GET_USERS";

export const getUsers = () => {
    return async (dispatch) => {
        let res;
        try {
         res = await axios.get(`${process.env.REACT_APP_API_URL}api/user`);
        } catch(e) {
            console.log(e);
        }
        dispatch({type: GET_USERS, payload: res.data});
    }
}