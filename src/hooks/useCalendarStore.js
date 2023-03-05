import { useDispatch, useSelector } from "react-redux";

const useCalendarStore = () => {
    const {events, activeEvent} = useSelector(state => state.calendar)

    return {
        events, 
        activeEvent,
    }

}

export default useCalendarStore;