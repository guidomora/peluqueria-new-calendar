
import { Grid } from '@mui/material'
import './App.css'
import CalendarComponent from './Components/CalendarComponent'
import CalendarModal from './Components/CalendarModal'
import NavBar from './Components/NavBar'

function Calendario() {


  return (
    <Grid>
      <NavBar />
      <CalendarComponent />
      <CalendarModal />
    </Grid>
  )
}

export default Calendario
