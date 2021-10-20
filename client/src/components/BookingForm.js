import React, { useState } from 'react';
import { postBooking } from '../Service/BookingService';

const BookingForm = ({addBooking}) => {

    const [bookingData, setBookingData] = useState({})

    const onChange = (event) => {
        bookingData[event.target.id] = event.target.value;
        setBookingData(bookingData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postBooking(bookingData).then((data) => {
            addBooking(data);
        })
    }

    return (
        <form onSubmit={onSubmit} id="bookings-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={onChange} type="text" id="name" required />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="email" required />
            </div>
            <div className="formWrap">
                <label htmlFor="status">Checked in status:</label>
                <select onChange={onChange} type="status" id="status">
                    <option value="true">Checked In</option>
                    <option selected value="false">Pending</option>
                </select>
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>
    )

}

export default BookingForm