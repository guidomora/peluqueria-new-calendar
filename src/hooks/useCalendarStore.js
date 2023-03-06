import { useDispatch, useSelector } from "react-redux";
import { onAddEvent, onSetActiveEvent } from "../store/calendar/calendarSlice";

const useCalendarStore = () => {
    const dispatch = useDispatch()
    const {events, activeEvent} = useSelector(state => state.calendar)

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent) => {
        // llegar al backend
        if (calendarEvent._id) {

        } else {
            dispatch(onAddEvent({...calendarEvent, _id: new Date().getTime()}))
        }
    }

    return {
        events, 
        activeEvent,

        setActiveEvent,
        startSavingEvent,
    }

}

export default useCalendarStore;