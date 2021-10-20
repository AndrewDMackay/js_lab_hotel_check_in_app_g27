
import { useState, useEffect } from 'react';
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import BookingService from "./services/BookingSevice";
import './App.css';


function App() {
  const [bookings, setBookings] = useState([]);


  useEffect(() => {
    BookingService.getBookings()
      .then(bookings => setBookings(bookings));
  }, []);


  const createBooking = newBooking => {
    BookingService.addBooking(newBooking)
      .then(savedBooking => setBookings([ ...bookings, savedBooking ]));
  };


  const updateBooking = updatedBooking => {
    // Req to server to update booking in DB..
    BookingService.updateBooking(updatedBooking);

    // Update locally..
    const updatedBookingIndex = bookings.findIndex(booking => booking._id === updatedBooking._id);
    const updatedBookings = [...bookings];
    updatedBookings[updatedBookingIndex] = updatedBooking;
    setBookings(updatedBookings);
  };


  const deleteBooking = idToDelete => {
    // Req to server to delete booking from DB..
    BookingService.deleteBooking(idToDelete);


    // Delete locally..
    setBookings(bookings.filter(booking => booking._id !== idToDelete));
  }


  return (
    <div id="app">
      <BookingForm addBooking={createBooking}/>
      <BookingList 
        bookings={bookings}
        updateBooking={updateBooking}
        deleteBooking={deleteBooking}
      />
    </div>
  );
}


export default App;

