import { Dispatch } from "react";
import { Action } from "redux";

export enum USER_ACTIONS {
  SET_USER = 'SET_USER',
	GET_TYPE = 'GET_TYPE'
}

export enum USER_TYPE {
	ADMIN = 'ADMIN',
	BASIC = 'BASIC'
}

// base object for store-slice, combines with Action<T> from redux
export interface UserState {
	user: USER_TYPE;	
}

export type UserAction = Action<USER_ACTIONS> & UserState;
export type DispatchLibAction = Dispatch<UserAction>;

const userState: Required<UserState> = {
	user: USER_TYPE.BASIC
};

export const userReducer = (
  state = userState,
  action: UserAction
): Required<UserState> => {
	if (!action) return state;

  switch (action.type) {
    case USER_ACTIONS.SET_USER:
      return {
				...state,
				user: action.user
      };
    case USER_ACTIONS.GET_TYPE:
      return state;
    default:
      return state;
  }
}