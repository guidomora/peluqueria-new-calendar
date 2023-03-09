
import { parseISO } from "date-fns";

// recibimos los eventos y como valor por defecto pnemos un array vacio
export const eventsToDateEvents = (eventos = []) => {
  return eventos.map((event) => {
    event.start = parseISO(event.start);
    event.end = parseISO(event.end);

    return event;
  });
};


    // const fechas = async() => {
    //   const  mapeoSegundos = await events.map((arr) => arr.start.seconds)
    //   const mapeoNanosegundos = await events.map((arr) => arr.start.nanoseconds)
    //   const segundos = mapeoSegundos.map((segundo) => segundo * 1000)
    //   const nanosegundos = mapeoNanosegundos.map((nanosegundo) => nanosegundo / 1000)
    //   const timestampEnMilisegundos = segundos.reduce((acc, val) => acc + val, 0) + nanosegundos.reduce((acc, val) => acc + val, 0);
    //   const fecha = new Date(timestampEnMilisegundos)
    //   dispatch(setStart(fecha))
    // }
    // fechas();