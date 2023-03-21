import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import useCalendarStore from '../hooks/useCalendarStore'
import useUiStore from '../hooks/useUiStore'

const NavBar = ({ nombre }) => {
    const { setActiveEvent, deleteEvent } = useCalendarStore(nombre)
    const calendars = useSelector(state => state.calendar.events[`${nombre}`]);
    const { openDateModal } = useUiStore()

    const handleClickNew = () => {
        setActiveEvent({
            title: "",
            notes: "",
            start: new Date(),
            end: new Date(),
        });
        openDateModal();
    };

    return (
        <Grid>
            <nav className="navbar bg-dark bg-body-tertiary " data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-text">
                        Calendario para turnos
                    </span>
                    <div>
                        <button className='btn btn-primary' onClick={handleClickNew}>Agregar turno</button>
                        {/* {activeEvent ? (<button className='btn btn-danger m-2' onClick={deleteEvent()}>Borrar turno</button>  ) : null} */}
                        <button className='btn btn-danger m-2' onClick={deleteEvent}>Borrar turno</button>
                    </div>
                </div>
            </nav>
        </Grid>
    )
}

export default NavBar