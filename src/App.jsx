import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Button from './components/Button'  
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import './components/calendar2.css'
import { MuiCheckbox } from './components/MuiCheckbox';
import CalendarHeader from './components/CalendarHeader';

export const App = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }

  return (
    <>
        <Navbar />
        <Header />
        <CalendarHeader />
        <Calendar onChange={onChange} value={date} />
        <Button />
        <MuiCheckbox />
        
    </>
  )
}

export default App
