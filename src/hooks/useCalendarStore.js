import { useDispatch, useSelector } from "react-redux";
import {
  onAddEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
  setEvent,
} from "../store/calendar/calendarSlice";
import { db } from "../firebase/config";
import { collection, addDoc, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";

const useCalendarStore = (nombre) => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar.events);
  const calendars = useSelector(state => state.calendar.events[`${nombre}`]);


  const setActiveEvent = (activeEvent) => {
    dispatch(onSetActiveEvent(activeEvent));
  };

  const startLoadingEvents = async () => {
    const querySnapshot = await getDocs(collection(db, `${nombre}`));
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
    dispatch(setEvent({ calendarId: nombre, events }));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent.id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
      const docRef = doc(db, `/${nombre}/${calendarEvent.id}`)
      await (setDoc(docRef, calendarEvent, {merge:true}))
    } else {
      const docRef = await addDoc(collection(db, `${nombre}`), {
        ...calendarEvent,
        _id: new Date().getTime(),
      });
      dispatch(onAddEvent({ calendarId: nombre, events }));
    }
  };


  const deleteEvent = async () => {
    deleteDoc(doc(db, `/${nombre}/${activeEvent.id}`));
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
