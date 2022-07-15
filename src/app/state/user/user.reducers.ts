import { createReducer, on } from "@ngrx/store";
import { resetUser, setUser } from "./user.actions";
import { IUser } from "./user.models";

export const initialState: IUser = {} 

export const userReducers = createReducer(
  initialState,

  on(setUser, (state, { userInfo }) => userInfo ),
  on(resetUser, (state) => initialState ),
  
)