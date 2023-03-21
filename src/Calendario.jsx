
import { Grid } from '@mui/material'
import KarinaCalendar from './AllCalendars/KarinaCalendar'
import MichaelCalendar from './AllCalendars/MichaelCalendar'
import NoraCalendar from './AllCalendars/NoraCalendar'
import PalomaCalendar from './AllCalendars/PalomaCalendar'
import TobiCalendar from './AllCalendars/TobiCalendar'
import VanesaCalendar from './AllCalendars/VanesaCalendar'
import './App.css'

function Calendario() {


  return (
    <Grid>
      <TobiCalendar/>
      <KarinaCalendar/>
      <MichaelCalendar />
      <PalomaCalendar />
      <VanesaCalendar />
      <NoraCalendar />
    </Grid>
  )
}

export default Calendario
