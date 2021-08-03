import { Dispatch } from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Action, combineReducers } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { userReducer } from "./user.reducer";

export const rootReducer = combineReducers({
	user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type TypedThunkAction<D = any, R = any> = (
  dispatch: Dispatch<D>,
  getState: () => RootState
) => R
export type TypedThunkDispatch<A = any, T = any> = ThunkDispatch<RootState, T, Action<A>>;
// export type TypedThunkAction<A = any, P = any> = ThunkAction<Promise<P>, RootState, any, Action<A>>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
