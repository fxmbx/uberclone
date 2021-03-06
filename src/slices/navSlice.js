import { createSlice } from '@reduxjs/toolkit'
// import { useState } from 'react'

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTime: (state, action) => {
            state.travelTimeInformation = action.payload;
        }
    }
})

export const { setOrigin, setDestination, setTravelTime } = navSlice.actions;


export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTime = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer