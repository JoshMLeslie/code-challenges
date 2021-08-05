import { Dispatch } from "react";
import { RootState } from "./root.reducer";
import { USER_ACTIONS, USER_TYPE } from "./user.reducer";

export const setUser = (user: USER_TYPE) => (
	dispatch: Dispatch<any>,
	getState: () => RootState
) => {
	dispatch({
		type: USER_ACTIONS.SET_USER,
		user
	})
};