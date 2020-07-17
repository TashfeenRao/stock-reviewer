import { FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../actions/contants';

const initialState = {
  pending: false,
  products: [],
  error: null,
};

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return state.concat([action.pending]);
    case FETCH_DATA_SUCCESS:
      return action.products;
    case FETCH_DATA_ERROR:
      return state.concat([action.error]);

    default:
      return state;
  }
};

export const getProducts = state => state.products;
export const getPending = state => state.pending;
export const getError = state => state.error;
