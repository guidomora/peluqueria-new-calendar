
import { parseISO } from "date-fns";

// recibimos los eventos y como valor por defecto pnemos un array vacio
export const eventsToDateEvents = (eventos = []) => {
  return eventos.map((event) => {
    event.start = parseISO(event.start);
    event.end = parseISO(event.end);

    return event;
  });
};