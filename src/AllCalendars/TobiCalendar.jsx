import { Grid } from '@mui/material'
import React from 'react'
import CalendarComponent from '../Components/CalendarComponent'
import CalendarModal from '../Components/CalendarModal'
import NavBar from '../Components/NavBar'

const TobiCalendar = () => {
    return (
        <Grid>
            <NavBar nombre={"tobias"}/>
            <CalendarComponent nombre={"tobias"} />
            <CalendarModal nombre={"tobias"}/>
        </Grid>
    )
}

export default TobiCalendar