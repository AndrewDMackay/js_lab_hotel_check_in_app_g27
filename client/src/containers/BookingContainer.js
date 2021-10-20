import React, {useState, useEffect} from 'react';
import { getBookings } from '../Service/BookingService';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';

const BookingContainer = () => {
    const [hotelBookings, setHotelBookings] = useState([]);

    useEffect(() => {
        getBookings().then((allBookings) => {
            setHotelBookings(allBookings);
        })
    }, []);

    const addBooking = (booking) => {
        const temp = hotelBookings.map(s =>s);
        temp.push(booking);
        setHotelBookings(temp);
    }

    const removeBooking = (id) => {
        const temp = hotelBookings.map(s => s);
        const indexToDelete = temp.map(s => s._id).indexOf(id);
        console.log(indexToDelete);

        temp.splice(indexToDelete, 1);
        setHotelBookings(temp);
    }

    return (
        <div>
            <BookingForm addBooking={addBooking}/>
            <BookingList bookings={hotelBookings} removeBooking={removeBooking}/>
        </div>
    )
}

export default BookingContainer;
