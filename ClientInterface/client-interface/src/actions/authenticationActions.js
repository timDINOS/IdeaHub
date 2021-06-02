import axios from "axios";
import jwt_decode from "jwt-decode";
import setToken from "../serverAuth/token";

export const OBTAIN_ERRORS = "OBTAIN_ERROR";
export const USER_LOADING = "USER_LOADING";
export const SET_USER = "SET_USER";

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
    axios.post("/api/users/login", userInfo).then(response => {
        const { token } = response.data;
        localStorage.setItem("jwtToken", token);
        setToken(token);

        var decoded_info = jwt_decode(token);
        relay(setUser(decoded_info));
    }).catch(error => relay({
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
    localStorage.removeItem("jwtToken");
    setToken(false);
    relay(setUser({}));
};