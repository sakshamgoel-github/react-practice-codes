import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true }; //Initial state

//CreateSlice is used to create and manage reducer function in more easy way
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      ++state.counter;
    },
    decrement(state) {
      --state.counter;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//Configure Store allows us to create multiple reducers for our central data store
const store = configureStore({
  reducer:{counter: counterSlice.reducer, auth:authSlice.reducer}
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
