import { ways } from "./data";
import TimeButton from "./TimeButton";
import BookingModal from "./BookingModal";
import "./DashboardEffects.css";
import { useState } from 'react';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false); // состояние модального окна
  const [selectedTime, setSelectedTime] = useState(''); // выбранное время для модального окна
  const [bookings, setBookings] = useState({}); // все записи

  const handleBookSlot = (time) => {
    console.log('Открываю модальное окно для времени:', time);
    setSelectedTime(time); // устанавливаем выбранное время
    setIsModalOpen(true); // открываем модальное окно
  };

  const handleBookSlotCancel = (time) => {
    if (window.confirm('Вы уверены, что хотите отменить запись?')) {
      console.log('Запись на', time, 'отменена');
      setBookings(prev => {
        const newBookings = { ...prev };
        delete newBookings[time];
        return newBookings;
      });
    }
    onClose();
  }

  const handleBookingSubmit = (bookingData) => {
    setBookings(prev => ({
      ...prev,
      [bookingData.time]: bookingData
    }));
    console.log('Новая запись:', bookingData);
  };

  return (
    <div className="dashboard">
      <div className="timeDescriptionButtons">
        <h3>Система записи на занятия</h3>
        
        <div>
          {ways.map((way) => {
            const booking = bookings[way.title];
            return (
              <TimeButton 
                key={way.id} 
                title={way.title}
                description={way.description}
                onBook={handleBookSlot} // дает возможность забронировать слот
                onClose={handleBookSlotCancel} // дает возможность отменить слот
                isBooked={!!booking} // показывает, забронирован ли слот
                bookingInfo={booking} 
              />
            );
          })}
        </div>
      </div>

      {/* Модальное окно */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTime={selectedTime}
        onSubmit={handleBookingSubmit}
      />
    </div>
  );
}