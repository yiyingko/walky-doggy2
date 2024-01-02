import BookingForm from './BookingForm';

export default function Form() {
  return (
    <main>
      <nav>
        <div>
          <h2>Booking form</h2>
          <p>
            <small>Currently Booked Walks</small>
          </p>
          <BookingForm />
        </div>
      </nav>
    </main>
  );
}
