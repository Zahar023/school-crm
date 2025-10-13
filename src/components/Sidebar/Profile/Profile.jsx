import React, { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, Edit2, Save } from "lucide-react";
import "./Profile.css";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Иван Петров",
    email: "ivan.petrov@example.com",
    phone: "+7 (999) 123-45-67",
    location: "Москва, Россия",
    role: "Преподаватель",
    joinDate: "Январь 2024",
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Здесь можно добавить логику сохранения
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">Профиль пользователя</h1>
        <button
          className={`edit-button ${isEditing ? "save-mode" : ""}`}
          onClick={isEditing ? handleSave : handleEdit}
        >
          {isEditing ? (
            <>
              <Save size={18} />
              Сохранить
            </>
          ) : (
            <>
              <Edit2 size={18} />
              Редактировать
            </>
          )}
        </button>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              <User size={48} />
            </div>
            <div className="profile-role-badge">{profile.role}</div>
          </div>

          <div className="profile-info">
            <div className="info-group">
              <label className="info-label">
                <User size={18} />
                Имя
              </label>
              {isEditing ? (
                <input
                  type="text"
                  className="info-input"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />
              ) : (
                <p className="info-value">{profile.name}</p>
              )}
            </div>

            <div className="info-group">
              <label className="info-label">
                <Mail size={18} />
                Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  className="info-input"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              ) : (
                <p className="info-value">{profile.email}</p>
              )}
            </div>

            <div className="info-group">
              <label className="info-label">
                <Phone size={18} />
                Телефон
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  className="info-input"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                />
              ) : (
                <p className="info-value">{profile.phone}</p>
              )}
            </div>

            <div className="info-group">
              <label className="info-label">
                <MapPin size={18} />
                Местоположение
              </label>
              {isEditing ? (
                <input
                  type="text"
                  className="info-input"
                  value={profile.location}
                  onChange={(e) =>
                    setProfile({ ...profile, location: e.target.value })
                  }
                />
              ) : (
                <p className="info-value">{profile.location}</p>
              )}
            </div>

            <div className="info-group">
              <label className="info-label">
                <Calendar size={18} />
                Дата регистрации
              </label>
              <p className="info-value">{profile.joinDate}</p>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <Calendar size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-value">24</p>
              <p className="stat-label">Занятий проведено</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <User size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-value">15</p>
              <p className="stat-label">Активных студентов</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Calendar size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-value">8</p>
              <p className="stat-label">Занятий на неделе</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
