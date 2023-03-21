
import React from 'react'

// Este componente se lo pasamos al Calendar de CalendarPage dentro de la propiedad components

const CalendarEventBox = ({event}) => {
    // Desestructuramos events para obtener el titulo y el nombre del usuario
    // para luego modificar el cuadrito del evento con jsx
    const {title, notes} = event;

  return (
    <>
        <strong>{title}</strong>
        <span> - {notes}</span>
    </>
  )
}

export default CalendarEventBox