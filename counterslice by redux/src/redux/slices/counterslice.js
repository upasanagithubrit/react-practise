import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const CounterSlice = createSlice({
    // ....teen cheeje hamasha aayegi slice me name,initial state and the reducers .............
    name: "Counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;