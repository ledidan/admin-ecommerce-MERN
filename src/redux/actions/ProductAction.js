import axios from "axios";
import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
} from "../constants/ProductConstants";
import { logout } from "../actions/UserAction";

// [GET] GET ALL PRODUCT LIST ACTION
export const productListAllAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // use axios.[GET] to compare user with server's user,
    const { data } = await axios.get("/api/products/all", config);

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: message,
    });
  }
};

// [DELETE] DELETE PRODUCT ACTION BY ADMIN
export const productDeleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // use axios.[GET] to compare user with server's user,
    await axios.delete(`/api/products/${id}/delete`, config);

    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};

// [POST] CREATE PRODUCT ACTION BY ADMIN
export const productCreateAction =
  (name, price, description, image, countInStock) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      // use axios.[POST] to create user
      const { data } = await axios.post(
        `/api/products/create`,
        { name, price, description, image, countInStock },
        config
      );

      dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, no token") {
        dispatch(logout());
      }
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: message,
      });
    }
  };

// [GET] GET EDIT PRODUCT ID PAGE ACTION BY ADMIN
export const productEditAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_EDIT_REQUEST });

    // use axios.[POST] to create user
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: PRODUCT_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, no token") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_EDIT_FAIL,
      payload: message,
    });
  }
};

// [PUT] UPDATE PRODUCT ID ACTION BY ADMIN
export const productUpdateAction = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // use axios.[POST] to create user
    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    );

    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    dispatch({ type: PRODUCT_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, no token") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload: message,
    });
  }
};
