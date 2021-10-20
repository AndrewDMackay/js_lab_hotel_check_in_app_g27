use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Test1",
    email: "test1@gmail.com",
    status: true
  },
  {
    name: "Test2",
    email: "test2@gmail.com",
    status: false
  },
  {
    name: "Test3",
    email: "test3@gmail.com",
    status: false
  }
]);