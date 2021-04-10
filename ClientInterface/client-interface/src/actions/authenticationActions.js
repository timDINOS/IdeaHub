import axios from "axios";
import jwt_decode from "jwt-decode";
import setToken from "../serverAuth/token";

const OBTAIN_ERRORS = "OBTAIN_ERROR";
const USER_LOADING = "USER_LOADING";
const SET_USER = "SET_USER";

export const setUser = userData => {
    return {
        type: SET_USER,
        payload: userData
    };
};


export const registerAct = (userInfo, hist) => relay => {
    axios.post("/api/user/", userInfo).then(response => hist.push("/login")).catch(error => relay({type: OBTAIN_ERRORS, payload: error.response.data}));
};

export const loginUser = userInfo => relay => {
    axios.post("/api/users/", userInfo).then(response => {
        const { token } = response.data;
        localInfo.setItem("jwtToken", token);
        setToken(token);

        var decoded_info = jwt_decode(token);
        relay(setUser(decoded_info));
    }).catch(error => dispatch({
        type: OBTAIN_ERRORS,
        payload: error.response.data
    }));
};

export const setLoading = () => {
    return {
        type: USER_LOADING
    };
};

export const userLogout = () => relay => {
    localInfo.removeItem("jwtToken");
    setToken(false);
    relay(setUser({}));
};