// TicketBookingForm.js

import React, { useState } from 'react';
import './Form.css';

function TicketBookingForm({ movieName, movieDate, movieTime, onClose }) {
  console.log(movieTime);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form data
    setFormData({
      name: '',
      email: '',
    });
    // Close the popup
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Book Ticket for {movieName}</h2>
        <p>Date: {movieDate}</p>
        <p>Time: {movieTime}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          {/* Add more form fields here */}
          <button type="submit">Book Ticket</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default TicketBookingForm;
