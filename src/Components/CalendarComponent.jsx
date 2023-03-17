import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from "date-fns";
import esES from "date-fns/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { espMesages } from '../helpers/espMesages';
import { useEffect, useState } from 'react';
import "../App.css"
import useUiStore from '../hooks/useUiStore';
import useCalendarStore from '../hooks/useCalendarStore';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


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


const CalendarComponent = ({nombre}) => {
    const { setActiveEvent, startLoadingEvents, activeEvent } = useCalendarStore(nombre)
    const { openDateModal } = useUiStore()
    const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "week")
    const calendars = useSelector(state => state.calendar.events[`${nombre}`]);
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
    }, [activeEvent])

    return (
        <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 5, }}>
            <Grid>
            <Typography sx={{fontSize: 28}}>{`${nombre}`}</Typography>
            </Grid>
            <Calendar
                culture="es"
                defaultView={lastView}
                localizer={localizer}
                events={calendars}
                onView={onViewChanged}
                eventPropGetter={eventStyleGetter}
                startAccessor="start"
                endAccessor="end"
                messages={espMesages()}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                min={new Date("December 25, 1995 9:00:00")}
                max={new Date("December 25, 1995 22:00:00")}
                style={{ marginTop: 40, marginBottom: 30, height: "calc( 100vh - 80px)", width: "95vw" }}
            />
        </Grid>
    )
}

export default CalendarComponent


