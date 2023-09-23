import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS

function CalendarPicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy" // Format for displaying the selected date
        isClearable // Allow clearing the selected date
      />
      {selectedDate && (
        <p>Selected Date: {selectedDate.toDateString()}</p>
      )}
    </div>
  );
}

export default CalendarPicker;