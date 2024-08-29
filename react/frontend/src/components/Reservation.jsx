import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Box, Typography, Button, TextField, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

const Reservation = ({ hobbyId }) => {
  const [selectedDate, setSelectedDate] = React.useState(dayjs());
  const [selectedTime, setSelectedTime] = React.useState(dayjs());
  const [numberOfPeople, setNumberOfPeople] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  const handlePeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const handleReservation = async () => {
    setLoading(true);

    const reservationDateTime = selectedDate
      .set('hour', selectedTime.hour())
      .set('minute', selectedTime.minute());

    const reservationData = {
      rdate: reservationDateTime.format('YYYY-MM-DD'),
      rtime: reservationDateTime.format('HH:mm'),
      rnumppl: numberOfPeople,
      login_id: 'user1', // Replace with actual login_id from your auth system
      hid: hobbyId
    };

    try {
      const response = await axios.post('/api/reservations', reservationData);
      alert('Reservation made successfully!');
    } catch (error) {
      console.error('Error making reservation:', error);
      alert('Error making reservation.');
    }

    setLoading(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        minHeight="80vh"
        width="100%"
        p={2}
      >
        <Typography variant="h5" gutterBottom sx={{ fontSize: '1.2rem' }}>
          Make a Reservation
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <DateCalendar
                value={selectedDate}
                onChange={handleDateChange}
                sx={{
                  '& .MuiPickersCalendarHeader-root': {
                    fontSize: '0.8rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: '0.5rem', sm: '0.75rem', md: '0.5rem' },
                    padding: { xs: '0.5rem', md: '0.5rem' },
                    color: '#E59261',
                  },
                  '& .MuiPickersCalendarHeader-labelContainer': {
                    margin: { xs: '0 0.25rem', sm: '0 0.25rem' },
                  },
                  '& .MuiPickersArrowSwitcher-root': {
                    order: 0,
                    color: '#E59261',
                  },
                  '& .MuiPickersDay-root': {
                    '&.Mui-selected': {
                      backgroundColor: '#E59261',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#E59261',
                      },
                    },
                  },
                  width: '100%',
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ mt: 4 }}>
              <Box sx={{ marginBottom: 2 }}>
                <TimePicker
                  label="Select Time"
                  value={selectedTime}
                  onChange={handleTimeChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        width: '80%',
                        maxWidth: '230px',
                        '& .MuiInputBase-input': { fontSize: '0.875rem' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#E59261',
                          },
                          '&:hover fieldset': {
                            borderColor: '#E59261',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#E59261',
                          },
                        },
                        '& label.Mui-focused': {
                          color: '#E59261',
                        },
                      }}
                    />
                  )}
                />
              </Box>

              <FormControl fullWidth>
                <InputLabel id="number-of-people-label">Number of People</InputLabel>
                <Select
                  labelId="number-of-people-label"
                  value={numberOfPeople}
                  onChange={handlePeopleChange}
                  label="Number of People"
                  sx={{
                    width: '80%',
                    maxWidth: '230px', 
                    '& .MuiSelect-outlined': {
                      fontSize: '0.875rem',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#E59261',
                      },
                      '&:hover fieldset': {
                        borderColor: '#E59261',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#E59261',
                      },
                    },
                    '& label.Mui-focused': {
                      color: '#E59261',
                    },
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          onClick={handleReservation}
          sx={{
            mt: 3,
            fontSize: '0.875rem',
            padding: '8px 16px',
            backgroundColor: '#E59261',
            '&:hover': {
              backgroundColor: '#d48156',
            },
          }}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Confirm Reservation'}
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default Reservation;
