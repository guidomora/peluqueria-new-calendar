import { createSlice } from "@reduxjs/toolkit";

const tempEvent = {
    end: new Date('2023-03-04T03:30:00.000Z'),
    start: new Date('2023-03-04T03:00:00.000Z'),
    title: 'start of the week',
    name: "guido",
    _id: new Date().getTime()
}


export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
   events: [tempEvent],
   activeEvent: null
  },
  reducers: {
    onSetActiveEvent: (state, {payload}) => {
        state.activeEvent = true
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = calendarSlice.actions;
