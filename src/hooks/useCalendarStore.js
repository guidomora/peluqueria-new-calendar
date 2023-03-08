import { useDispatch, useSelector } from "react-redux";
import {
  onAddEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/calendar/calendarSlice";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { eventsToDateEvents } from "../helpers/eventsToDateEvents";

const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startLoadingEvents = async () => {
    const querySnapshot = await getDocs(collection(db, "tobias"));
    const events = [];
    querySnapshot.forEach((doc) => {
      events.push(doc.data());
    });
    const fechaEventos = eventsToDateEvents(events.calendarEvent);
    dispatch(onLoadEvents(fechaEventos));
    console.log(events);
  };
  const startSavingEvent = async (calendarEvent) => {
    // llegar al backend
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      const docRef = await addDoc(collection(db, "tobias"), {
        calendarEvent,
        _id: new Date().getTime(),
      });
      console.log("Document written with ID: ", docRef.id);
      dispatch(onAddEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const deleteEvent = () => {
    dispatch(onDeleteEvent());
  };

  return {
    events,
    activeEvent,

    setActiveEvent,
    startSavingEvent,
    deleteEvent,
    startLoadingEvents,
  };
};

export default useCalendarStore;
