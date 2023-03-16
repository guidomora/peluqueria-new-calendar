import { Grid } from '@mui/material'
import React from 'react'
import CalendarComponent from '../Components/CalendarComponent'
import CalendarModal from '../Components/CalendarModal'
import NavBar from '../Components/NavBar'

const KarinaCalendar = () => {
    return (
        <Grid>
            <NavBar nombre={"karina"}/>
            <CalendarComponent nombre={"karina"} />
            <CalendarModal nombre={"karina"}/>
        </Grid>
    )
}

export default KarinaCalendar