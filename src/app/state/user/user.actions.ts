import { createAction, props } from "@ngrx/store";
import { IUser } from "./user.models";

export const setUser = createAction(
  '[USER] Get user info into state',
  props<{ userInfo: IUser }>()
);

export const resetUser = createAction(
  '[USER] reset user info in state'
);