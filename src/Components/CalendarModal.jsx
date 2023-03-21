import Modal from 'react-modal';
import React, { useEffect, useState } from 'react'
import "./calendarModal.css"
import { differenceInSeconds } from 'date-fns';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import Swal from 'sweetalert2';
import useUiStore from '../hooks/useUiStore';
import useCalendarStore from '../hooks/useCalendarStore';
import { useSelector } from 'react-redux';


registerLocale('es', es)

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


Modal.setAppElement('#root');


const CalendarModal = ({ nombre }) => {
    const { activeEvent, startSavingEventKarina, startSavingEventTobias } = useCalendarStore(nombre)
    const { isDateModalOpen, closeDateModal } = useUiStore(nombre)
    const calendars = useSelector(state => state.calendar.events[`${nombre}`]);
    const { nombree } = useSelector(state => state.ui)
    const [formValues, setFormValues] = useState({
        start: new Date(),
        end: new Date(),
        title: "",
        notes: "",
    })

    useEffect(() => {
        if (activeEvent !== null) {
            setFormValues({ ...activeEvent })
        }
    }, [activeEvent])

    const onInputChanged = ({ target }) => {
        setFormValues({ ...formValues, [target.name]: target.value })
    }

    const onDateChanged = (event, changing) => {
        setFormValues({ ...formValues, [changing]: event })
    }

    const closeModal = () => {
        closeDateModal()
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        // diferencia en segundos entre la fecha fin y la de inicio
        const difference = differenceInSeconds(formValues.end, formValues.start);

        // si difference no es un numero o es menos a 0
        if (isNaN(difference) || difference <= 0) {
            Swal.fire("Fechas incorrectas", "Revisar las fechas ingresadas", "error");
            return;
        }

        if (formValues.title.length <= 0) {
            Swal.fire("Nombre de cliente obligatorio", "", "error");
            return;
        }


        if (nombree == "tobias") { await startSavingEventTobias(formValues) } else if (nombree == "karina") { await startSavingEventKarina(formValues) }
        closeDateModal();
    }
    return (
        <Modal isOpen={isDateModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}>
            <h1> Nuevo Turno </h1>
            <hr />
            <form className="container" onSubmit={onSubmit}>

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <ReactDatePicker locale="es" selected={formValues.start} onChange={(event) => onDateChanged(event, "start")} className="form-control" dateFormat="Pp" showTimeSelect />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <ReactDatePicker locale="es" selected={formValues.end} onChange={(event) => onDateChanged(event, "end")} className="form-control" dateFormat="Pp" minDate={formValues.start
                    } showTimeSelect />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChanged}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Descripcion"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChanged}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}

export default CalendarModal