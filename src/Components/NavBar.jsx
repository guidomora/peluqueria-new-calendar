import { Grid } from '@mui/material'
import React from 'react'

const NavBar = () => {
    return (
        <Grid>
            <nav className="navbar bg-dark bg-body-tertiary " data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-text">
                        Calendario para turnos
                    </span>
                    <button className='btn btn-primary'>Agregar Turno</button>
                </div>
            </nav>
        </Grid>
    )
}

export default NavBar