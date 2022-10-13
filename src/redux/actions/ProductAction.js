import axios from "axios";
import {
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/ProductConstants";

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

// [DELETE] DELETE PRODUCT ACTION BY ID ADMIN
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
