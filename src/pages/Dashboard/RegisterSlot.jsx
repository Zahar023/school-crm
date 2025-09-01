export default function RegisterSlot({ description, onBook, time, isBooked, bookingInfo, onClose }) {
  function handleClick() {
    if (!isBooked) {
      console.log("clicked!");
      onBook(time);
    }
  }

  function handleCancelClick() {
    if (isBooked) {
      console.log("clicked!");
      onClose(time);
    }
  }

  // показывает записанный слот
  if (isBooked) {
    return (
      <div className="booked-slot">
        <div className="booked-info">{bookingInfo.childName}</div>
        <div className="booked-details">
          Учитель: {bookingInfo.teacher}<br/>
          Локация: {bookingInfo.location}
        </div>
        <button className="cancel-button" onClick={handleCancelClick}>
          Отменить
        </button>
      </div>
    );
  }

  // кнопка записать
  return (
    <button className="register-button" onClick={handleClick}>
      {description}
    </button>
  );
}