import RegisterSlot from "./RegisterSlot";

// кнопка времени и слот регистрации
export default function TimeButton({ title, description, onBook, isBooked, bookingInfo, onClose }) {
  return (
    <div className="time-slot-container">
      <button className="time-button">{title}</button>
      <RegisterSlot 
        description={description} 
        onBook={onBook}
        time={title}
        isBooked={isBooked}
        bookingInfo={bookingInfo}
        onClose={onClose}
      />
    </div>
  );
}