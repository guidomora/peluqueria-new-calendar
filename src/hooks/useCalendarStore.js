import { useDispatch, useSelector } from "react-redux";
import {
  onAddEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent,
  setEvent,
  setStart,
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
import { toDate } from "date-fns";
import { async } from "@firebase/util";

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
      events.push({
        id: doc.id,
        start: doc.data().start.toDate(),
        end: doc.data().end.toDate(),
        title: doc.data().title,
        notes: doc.data().notes,
      });
    });
    //  events.map(event => event.start.toDate())
    dispatch(setEvent(events));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      const docRef = await addDoc(collection(db, "tobias"), {
        ...calendarEvent,
        _id: new Date().getTime(),
      });
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
