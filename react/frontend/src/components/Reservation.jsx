import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';

const Reservation = () => {
  // State for selected date
  const [selectedDate, setSelectedDate] = React.useState(dayjs());
  // State for selected time
  const [selectedTime, setSelectedTime] = React.useState(dayjs());

  // Function to handle date change
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  // Function to handle time change
  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  // Function to handle reservation submission
  const handleReservation = () => {
    const reservationDateTime = selectedDate
      .set('hour', selectedTime.hour())
      .set('minute', selectedTime.minute());

    // Placeholder for actual reservation logic
    console.log('Reservation Date and Time:', reservationDateTime.format('YYYY-MM-DD HH:mm'));
    alert(`Reservation made for ${reservationDateTime.format('YYYY-MM-DD HH:mm')}`);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4} width="100%">
        <Typography variant="h5" gutterBottom sx={{ fontSize: '1.5rem' }}>
          Make a Reservation
        </Typography>

        {/* Container for Date and Time Picker */}
        <Grid container spacing={4} justifyContent="center" alignItems="flex-start"> {/* Changed alignItems to 'flex-start' */}
          {/* Date Picker */}
          <Grid item xs={12} sm={6} md={5}>
            <Box>
              <DateCalendar
                value={selectedDate}
                onChange={handleDateChange}
                sx={{
                  '& .MuiPickersCalendarHeader-root': { fontSize: '0.8rem' }, // Smaller font for header
                  width: '100%', // Full width for DateCalendar
                }}
              />
            </Box>
          </Grid>

          {/* Time Picker */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ marginLeft: { sm: 2, md: 4 } }}> {/* Add margin-left for spacing */}
              <TimePicker
                label="Select Time"
                value={selectedTime}
                onChange={handleTimeChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      width: '100%',
                      '& .MuiInputBase-input': { fontSize: '0.875rem' },
                    }}
                  />
                )}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleReservation}
          sx={{ mt: 3, fontSize: '0.875rem', padding: '8px 16px' }} // Smaller font and padding for button
        >
          Confirm Reservation
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default Reservation;
