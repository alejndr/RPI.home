import { IAppState } from "../app.state";

export const selectUser = (state: IAppState) => state.user;