import Modal from 'react-modal';
import React, { useState } from 'react'
import "./calendarModal.css"
import { addHours } from 'date-fns';

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


const CalendarModal = () => {
    const [modalIsOpen, setIsOpen] = useState(true);
    const [formValues, setFormValues] = useState({
        start: new Date(),
        end: addHours(new Date(), 2),
        nombreCliente: "Guido",
        descripcion: "Corte de pelo"
    })

    const onInputChanged = ({ target }) => {
        setFormValues({ ...formValues, [target.name]: target.value })
    }


    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}>
            <h1> Nuevo Turno </h1>
            <hr />
            <form className="container">

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <input className="form-control" placeholder="Fecha inicio" />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <input className="form-control" placeholder="Fecha inicio" />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        name="nombreCliente"
                        autoComplete="off"
                        value={formValues.nombreCliente}
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
                        name="descripcion"
                        value={formValues.descripcion}
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