import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from "date-fns";
import esES from "date-fns/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { espMesages } from '../helpers/espMesages';
import { useState } from 'react';
import "../App.css"


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

const myEventsList = [{end: new Date('2023-03-04T03:30:00.000Z'),
start: new Date('2023-03-04T03:00:00.000Z'),
title: 'start of the week',
name: "guido"}]

const CalendarComponent = (props) => {
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
    return (
        <div>
            <Calendar
                culture="es"
                defaultView={lastView}
                localizer={localizer}
                events={myEventsList}
                onView={onViewChanged}
                eventPropGetter={eventStyleGetter}
                startAccessor="start"
                endAccessor="end"
                messages={espMesages()}
                style={{ marginTop: 20, marginBottom: 30, height: "calc( 100vh - 80px)" }}
            />
        </div>
    )
}

export default CalendarComponent


