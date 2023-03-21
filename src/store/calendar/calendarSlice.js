import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: {},
    activeEvent: null,
    isLoadingEvents: true,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
      
    },
    onAddEvent: (state, { payload }) => {
      if (!state.events[payload.calendarId]) {
        state.events[payload.calendarId] = [];
      }
      state.events[payload.calendarId].push(payload.event);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events[payload.calendarId] = state.events[payload.calendarId].map((event) =>
        event.id === payload.event.id ? payload.event : event
      );
    },

    onDeleteEvent: (state) => {
      if (state.activeEvent?.calendarId) {
        state.events[state.activeEvent.calendarId] = state.events[state.activeEvent.calendarId]
          .filter((event) => event.id !== state.activeEvent.event.id);
        state.activeEvent = null;
      }
    },
    setEvent: (state, { payload }) => {
      state.events[payload.calendarId] = payload.events;
    },

    onLoadEvents: (state, { payload }) => {
      state.isLoadingEvents = false;

      (payload.events || []).forEach((event) => {
        const exists = state.events[payload.calendarId]?.some(
          (dbEvent) => dbEvent.id === event.id
        );
        if (!exists) {
          state.events[payload.calendarId].push(event);
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onSetActiveEvent,
  onAddEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvents,
  setEvent,
  setStart,
} = calendarSlice.actions;
