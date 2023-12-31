import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface IConfigState {
  sidebar: boolean;
  // navigation?: INavigation[];
}
const initialState: IConfigState = {
  //   navigation: undefined,
  sidebar: false,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setSidebar: (state, action: PayloadAction<boolean>) => {
      state.sidebar = action.payload;
    },
    // setNavigation: (state, action: PayloadAction<INavigation[]>) => {
    //   state.navigation = action.payload;
    // },
  },
});

export const { setSidebar } = configSlice.actions;

export default configSlice.reducer;
