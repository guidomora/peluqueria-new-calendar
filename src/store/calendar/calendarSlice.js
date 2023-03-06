import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  start: new Date(),
  end: addHours(new Date(), 3),
  title: "start of the week",
  name: "guido",
  notes: "holaaaa",
  _id: new Date().getTime(),
  user: {
    _id: "123",
    name: "Fernando",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddEvent } = calendarSlice.actions;
