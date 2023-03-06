import { Grid } from '@mui/material'
import { addHours } from 'date-fns'
import React from 'react'
import useCalendarStore from '../hooks/useCalendarStore'
import useUiStore from '../hooks/useUiStore'

const NavBar = () => {
    const {setActiveEvent} =useCalendarStore()
    const {openDateModal} = useUiStore()

    const handleClickNew = () => {
        setActiveEvent({
          title: "",
          notes: "",
          start: new Date(),
          end: addHours(new Date(), 2),
          bgColor: "#fafafa",
          user: {
            id: "123",
            name: "Fernando",
          },
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
                    <button className='btn btn-primary' onClick={handleClickNew}>Agregar Turno</button>
                </div>
            </nav>
        </Grid>
    )
}

export default NavBar