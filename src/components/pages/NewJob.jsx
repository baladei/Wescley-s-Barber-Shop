import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import './NewJob.css'

export const NewJob = () => {
  return (
    <div className='diary'>
      <span>Escolhe um dia e um horário de sua preferência:</span>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar className='calendar'/>
    </LocalizationProvider>
    </div>
  );
}