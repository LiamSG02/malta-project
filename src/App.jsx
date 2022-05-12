import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import './components/calendar2.css'

export const App = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }

  return (
    <>
        <Navbar />
        <Calendar onChange={onChange} value={date} />
    </>
  )
}

export default App
