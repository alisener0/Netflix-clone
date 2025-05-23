import { ActionTypes } from "../reducers/actionTypes";
import api from "../../utils/api";

export const getGenres = () => (dispatch) => {
  dispatch({
    type: ActionTypes.GENRES_LOADİNG,
  });
  api
    .get("/genre/movie/list")
    .then((res) =>
      dispatch({
        type: ActionTypes.GENRES_SUCCESS,
        payload: res.data.genres,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.GENRES_ERROR,
        payload: err.message,
      })
    );
};
