import { deleteBooking } from "../Service/BookingService";

const BookingItem = ({booking, removeBooking}) => {
    
    console.log(booking);
    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })
    }

    return (
        <div>
            <h1>{booking.name}</h1>
            <p>Email: {booking.email}</p>
            <p>Status: {booking.status}</p>
            <button onClick={handleDelete}>🗑</button>
        </div>
    )
}

export default BookingItem