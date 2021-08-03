import { Dispatch } from "react";
import { Action } from "redux";

export enum USER_ACTIONS {
  SET_ADMIN = 'SET_ADMIN',
  SET_BASIC = 'SET_BASIC',
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
    case USER_ACTIONS.SET_ADMIN:
      return {
				...state,
				user: USER_TYPE.ADMIN
      };
    case USER_ACTIONS.SET_BASIC:
      return {
				...state,
				user: USER_TYPE.BASIC
      };
    case USER_ACTIONS.GET_TYPE:
      return state;
    default:
      return state;
  }
}