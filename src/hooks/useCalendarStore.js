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
    dispatch(setEvent(events));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (activeEvent.id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
      const docRef = doc(db, `/tobias/${activeEvent.id}`)
      await (setDoc(docRef, calendarEvent, {merge:true}))
    } else {
      const docRef = await addDoc(collection(db, "tobias"), {
        ...calendarEvent,
        _id: new Date().getTime(),
      });
      dispatch(onAddEvent({ ...calendarEvent}));
    }
  };

  const deleteEvent = async () => {
    deleteDoc(doc(db, `/tobias/${activeEvent.id}`));
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
