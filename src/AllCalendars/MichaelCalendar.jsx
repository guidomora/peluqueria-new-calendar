import { Grid } from '@mui/material'
import React from 'react'
import CalendarComponent from '../Components/CalendarComponent'
import CalendarModal from '../Components/CalendarModal'
import NavBar from '../Components/NavBar'

const MichaelCalendar = () => {
    return (
        <Grid>
            <NavBar nombre={"michael"}/>
            <CalendarComponent nombre={"michael"} />
            <CalendarModal nombre={"michael"}/>
        </Grid>
    )
}

export default MichaelCalendar