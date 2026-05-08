import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [showCourses, setShowCourses] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState(null);
    const [coursesList, setCoursesList] = useState([]);
    const [loading, setLoading] = useState(true);

    // ЗАГРУЗКА КУРСОВ ИЗ SPRING BOOT
    useEffect(() => {
        fetch('http://localhost:8080/api/courses')
            .then(res => res.json())
            .then(data => {
                setCoursesList(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Бэкенд не запущен:', err);
                setLoading(false);
            });
    }, []);

    const openCourse = (course) => {
        setSelectedCourse(course);
        setSelectedFormat(null);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCourse(null);
        setSelectedFormat(null);
    };

    // СТРАНИЦА КУРСОВ
    if (showCourses) {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="logo">🎓 EduPlatform</div>
                        <div className="nav-links">
                            <a href="#" onClick={() => setShowCourses(false)}>Главная</a>
                            <a href="#" onClick={() => setShowCourses(false)}>О нас</a>
                            <a href="#" onClick={() => setShowCourses(true)}>Курсы</a>
                            <a href="#" onClick={() => setShowCourses(false)}>Контакты</a>
                        </div>
                    </div>
                </header>

                <section className="page-title">
                    <div className="container">
                        <h1>Наши курсы программирования</h1>
                        <p>Выберите курс и начните учиться уже сегодня</p>
                    </div>
                </section>

                <section className="courses-section">
                    <div className="container">
                        {loading ? (
                            <div className="loading">Загрузка курсов...</div>
                        ) : (
                            <div className="courses-grid">
                                {coursesList.map(course => (
                                    <div key={course.id} className="course-card" onClick={() => openCourse(course)}>
                                        <img src={course.image} alt={course.name} />
                                        <h3>{course.name}</h3>
                                        <p>{course.description.substring(0, 100)}...</p>
                                        <div className="course-price">💰 {course.price} ₸</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                <footer>
                    <div className="container">
                        <p>© 2026 EduPlatform. Все права защищены</p>
                    </div>
                </footer>

                {/* МОДАЛЬНОЕ ОКНО */}
                {showModal && selectedCourse && (
                    <div className="modal" style={{ display: 'block' }} onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-modal" onClick={closeModal}>&times;</span>
                            <h2 style={{ color: '#667eea', fontSize: '28px', marginBottom: '15px' }}>{selectedCourse.name}</h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '15px' }}>{selectedCourse.description}</p>
                            <p><strong>💰 Цена:</strong> {selectedCourse.price} ₸</p>
                            <p><strong>⏱ Длительность:</strong> {selectedCourse.duration}</p>
                            <p><strong>📊 Уровень:</strong> {selectedCourse.level}</p>

                            <div style={{ margin: '20px 0' }}>
                                <h3>Выберите формат обучения:</h3>
                                <div className="format-buttons">
                                    <button className="format-btn btn-online" onClick={() => setSelectedFormat('online')}>
                                        💻 Онлайн
                                    </button>
                                    <button className="format-btn btn-offline" onClick={() => setSelectedFormat('offline')}>
                                        🏢 Оффлайн
                                    </button>
                                </div>
                            </div>

                            {selectedFormat && (
                                <div className="contact-box">
                                    <p>✅ Вы выбрали: <strong>{selectedFormat === 'online' ? 'Онлайн обучение' : 'Оффлайн обучение'}</strong></p>
                                    <p>📍 {selectedFormat === 'online' ? 'Zoom / Google Meet ссылка придёт на email' : 'г. Алматы, ул. Абая 10, офис 305'}</p>
                                    <div className="big-phone">
                                        📞 <a href="tel:+77001234567">+7 (700) 123-45-67</a>
                                    </div>
                                    <button className="call-btn" onClick={() => window.location.href = 'tel:+77001234567'}>
                                        📞 Позвонить и записаться
                                    </button>
                                    <p style={{ marginTop: '15px', fontSize: '12px', color: '#666' }}>Или мы перезвоним вам в течение 15 минут</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // ГЛАВНАЯ СТРАНИЦА
    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">🎓 EduPlatform</div>
                    <div className="nav-links">
                        <a href="#" onClick={() => setShowCourses(false)}>Главная</a>
                        <a href="#" onClick={() => setShowCourses(false)}>О нас</a>
                        <a href="#" onClick={() => setShowCourses(true)}>Курсы</a>
                        <a href="#" onClick={() => setShowCourses(false)}>Контакты</a>
                    </div>
                </div>
            </header>

            <section className="hero">
                <div className="container">
                    <h1>Онлайн курсы<br />по программированию</h1>
                    <p>Станьте востребованным специалистом с нуля</p>
                    <a href="#" className="btn" onClick={() => setShowCourses(true)}>Начать обучение →</a>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2>Почему выбирают нас</h2>
                    <div className="features-row">
                        <div className="feature">
                            <img src="https://xakep.ru/wp-content/uploads/2015/05/func1.jpg" alt="Преподаватели" />
                            <h3>Опытные преподаватели</h3>
                            <p>Практикующие разработчики из ведущих IT-компаний</p>
                        </div>
                        <div className="feature">
                            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=400" alt="Проекты" />
                            <h3>Реальные проекты</h3>
                            <p>Вы создадите 5+ проектов для портфолио</p>
                        </div>
                        <div className="feature">
                            <img src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?w=400" alt="Поддержка" />
                            <h3>Поддержка 24/7</h3>
                            <p>Помощь с домашними заданиями и вопросами</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="container">
                    <h2>О нас</h2>
                    <div className="about-text">
                        <p>EduPlatform — это онлайн-школа программирования, которая помогает начинающим разработчикам освоить востребованные профессии.</p>
                        <p>Мы верим, что каждый может научиться программировать, если выбрать правильный путь и получать поддержку опытных наставников.</p>
                        <p>С 2020 года мы обучили более <strong>10 000 студентов</strong>, которые успешно работают в IT.</p>
                    </div>
                    <a href="#" className="btn btn-courses" onClick={() => setShowCourses(true)}>📚 Смотреть все курсы</a>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="container">
                    <h2>Контакты</h2>
                    <div className="contact-info">
                        <p>📧 Email: info@eduplatform.kz</p>
                        <p>📞 Телефон: <a href="tel:+77001234567">+7 (700) 123-45-67</a></p>
                        <p>📍 Адрес: г. Алматы, ул. Абая 10</p>
                        <p>🕒 Режим работы: Пн-Пт 9:00 - 18:00</p>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>© 2026 EduPlatform. Все права защищены</p>
                </div>
            </footer>
        </div>
    );
}

export default App;