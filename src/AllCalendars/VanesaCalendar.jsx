import { Grid } from '@mui/material'
import React from 'react'
import CalendarComponent from '../Components/CalendarComponent'
import CalendarModal from '../Components/CalendarModal'
import NavBar from '../Components/NavBar'

const VanesaCalendar = () => {
    return (
        <Grid>
            <NavBar nombre={"vanesa"}/>
            <CalendarComponent nombre={"vanesa"} />
            <CalendarModal nombre={"vanesa"}/>
        </Grid>
    )
}

export default VanesaCalendar