import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay, toDate } from "date-fns";
import esES from "date-fns/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { espMesages } from '../helpers/espMesages';
import { useEffect, useState } from 'react';
import "../App.css"
import useUiStore from '../hooks/useUiStore';
import useCalendarStore from '../hooks/useCalendarStore';
import { Grid } from '@mui/material';


const locales = {
    es: esES,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


const CalendarComponent = () => {
    const { events, setActiveEvent, startLoadingEvents } = useCalendarStore()
    const { openDateModal } = useUiStore()
    const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "week")

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backGroundColor: "#9212ea",
            borderRadius: "0px",
            opacity: 0.8,
            color: "white"
        }

        return {
            style
        }
    }

    const onViewChanged = (event) => {
        localStorage.setItem("lastView", event)
        setLastView(event)
    }

    const onDoubleClick = () => {
        openDateModal()
    }

    const onSelect = (event) => {
        setActiveEvent(event)
    }

    useEffect(() => {
        startLoadingEvents()
    }, [])

    console.log(events)
    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
            <Calendar
                culture="es"
                defaultView={lastView}
                localizer={localizer}
                events={events}
                onView={onViewChanged}
                eventPropGetter={eventStyleGetter}
                startAccessor="start"
                endAccessor="end"
                messages={espMesages()}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                style={{ marginTop: 20, marginBottom: 30, height: "calc( 100vh - 80px)", width: "95vw" }}
            />
        </Grid>
    )
}

export default CalendarComponent


