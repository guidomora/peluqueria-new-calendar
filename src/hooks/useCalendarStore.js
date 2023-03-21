import { useDispatch, useSelector } from "react-redux";
import {
  onAddEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent,
  setEvent,
} from "../store/calendar/calendarSlice";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { id } from "date-fns/locale";

const useCalendarStore = (nombre) => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const calendars = useSelector((state) => state.calendar.events[`${nombre}`]);

  const setActiveEvent = (activeEvent) => {
    dispatch(
      onSetActiveEvent({
        calendarId: nombre,
        event: activeEvent,
      })
    );
    console.log(activeEvent);
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

  const startSavingEventKarina = async (calendarEvent, calendarId = nombre) => {
    if (activeEvent?.event.id) {
      const docRef = doc(db, `/karina/${calendarEvent.id}`);
      await setDoc(docRef, calendarEvent, { merge: true });
      dispatch(onUpdateEvent({ calendarId, ...calendarEvent }));
    } else {
      const docRef = await addDoc(collection(db, `karina`), {
        ...calendarEvent,
        id: new Date().getTime(),
      });
      dispatch(onAddEvent({ nombre, calendarEvent }));
      dispatch(onLoadEvents({ nombre, calendarEvent }));
    }
  };

  const startSavingEventTobias = async (calendarEvent, calendarId = nombre) => {
    if (activeEvent?.event.id) {
      const docRef = doc(db, `/tobias/${calendarEvent.id}`);
      await setDoc(docRef, calendarEvent, { merge: true });
      dispatch(onUpdateEvent({ calendarId, ...calendarEvent }));
    } else {
      const docRef = await addDoc(collection(db, `tobias`), {
        ...calendarEvent,
      });
      dispatch(onAddEvent({ nombre, calendarEvent }));
    }
  };

  const deleteEvent = async () => {
    try {
      if (activeEvent?.event.id) {
        await deleteDoc(doc(db, `/tobias/${activeEvent.event.id}`));
        dispatch(onDeleteEvent(activeEvent));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    events,
    activeEvent,

    setActiveEvent,
    startSavingEventKarina,
    deleteEvent,
    startLoadingEvents,
    startSavingEventTobias,
  };
};

export default useCalendarStore;
