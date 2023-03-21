import { Grid } from '@mui/material'
import React from 'react'
import CalendarComponent from '../Components/CalendarComponent'
import CalendarModal from '../Components/CalendarModal'
import NavBar from '../Components/NavBar'

const PalomaCalendar = () => {
    return (
        <Grid>
            <NavBar nombre={"paloma"}/>
            <CalendarComponent nombre={"paloma"} />
            <CalendarModal nombre={"paloma"}/>
        </Grid>
    )
}

export default PalomaCalendar