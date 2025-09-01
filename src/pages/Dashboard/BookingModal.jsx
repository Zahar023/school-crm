import React, { useState } from 'react';

export default function BookingModal({ isOpen, onClose, selectedTime, onSubmit }) {
  const [formData, setFormData] = useState({
    teacher: '',
    childName: '',
    location: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.teacher && formData.childName && formData.location) {
      onSubmit({
        ...formData,
        time: selectedTime
      });
      setFormData({ teacher: '', childName: '', location: '' });
      onClose();
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Запись на {selectedTime}</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div>
          <div className="form-group">
            <label className="form-label">Учитель</label>
            <input
              type="text"
              value={formData.teacher}
              onChange={(e) => handleInputChange('teacher', e.target.value)}
              placeholder="Введите имя учителя"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Имя ребенка</label>
            <input
              type="text"
              value={formData.childName}
              onChange={(e) => handleInputChange('childName', e.target.value)}
              placeholder="Введите имя ребенка"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Локация ребенка</label>
            <select
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="form-select"
            >
              <option value="">Выберите локацию</option>
              <option value="Москва">Москва</option>
              <option value="Санкт-Петербург">Санкт-Петербург</option>
              <option value="Екатеринбург">Екатеринбург</option>
              <option value="Новосибирск">Новосибирск</option>
              <option value="Казань">Казань</option>
              <option value="Нижний Новгород">Нижний Новгород</option>
              <option value="Другая">Другая</option>
            </select>
          </div>

          <div className="modal-buttons">
            <button className="modal-button-cancel" onClick={onClose}>
              Отмена
            </button>
            <button className="modal-button-submit" onClick={handleSubmit}>
              Записать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}