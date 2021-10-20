import BookingItem from "./BookingItem";

const BookingList = ({bookings, removeBooking}) => {
    const allBookingsList = bookings.map((booking) => {
        return <BookingItem booking={booking} key={booking._id} removeBooking={removeBooking} />
    });

    return (
        <div>
            {allBookingsList}
        </div>
    )

}

export default BookingList