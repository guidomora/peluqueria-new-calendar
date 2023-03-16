import { Grid } from '@mui/material'
import { addHours } from 'date-fns'
import React from 'react'
import useCalendarStore from '../hooks/useCalendarStore'
import useUiStore from '../hooks/useUiStore'

const NavBar = ({nombre}) => {
    const {setActiveEvent, deleteEvent, activeEvent} =useCalendarStore(nombre)
    const {openDateModal} = useUiStore()

    const handleClickNew = () => {
        setActiveEvent({
          title: "",
          notes: "",
          start: new Date(),
          end: addHours(new Date(), 2),
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
                      {activeEvent ? (<button className='btn btn-danger m-2' onClick={deleteEvent}>Borrar turno</button>  ) : null}
                    </div>
                </div>
            </nav>
        </Grid>
    )
}

export default NavBar