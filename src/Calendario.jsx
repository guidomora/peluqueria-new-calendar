
import { Grid } from '@mui/material'
import KarinaCalendar from './AllCalendars/KarinaCalendar'
import TobiCalendar from './AllCalendars/TobiCalendar'
import './App.css'

function Calendario() {


  return (
    <Grid>
      <TobiCalendar/>
      <KarinaCalendar/>
    </Grid>
  )
}

export default Calendario
