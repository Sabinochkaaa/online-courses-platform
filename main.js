// МАССИВ КУРСОВ С КАРТИНКАМИ ИЗ ИНТЕРНЕТА
const coursesList = [
    {
        id: 1,
        name: "JavaScript с нуля до PRO",
        description: "Изучите самый популярный язык программирования. Создавайте интерактивные сайты и приложения. 3 месяца обучения + реальные проекты.",
        price: "49 900 ₸",
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=600",
        duration: "3 месяца",
        level: "Начинающий"
    },
    {
        id: 2,
        name: "Python для начинающих",
        description: "Анализ данных, веб-разработка, автоматизация — Python открывает все двери в IT.",
        price: "54 900 ₸",
        image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?w=600",
        duration: "3 месяца",
        level: "Начинающий"
    },
    {
        id: 3,
        name: "Java-разработчик",
        description: "Создавайте надёжные бэкенд-системы на языке Java. Подготовка к собеседованиям.",
        price: "59 900 ₸",
        image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=600",
        duration: "4 месяца",
        level: "Средний"
    },
    {
        id: 4,
        name: "React + Spring Boot",
        description: "Полный курс по созданию современных веб-приложений на React и Spring Boot.",
        price: "69 900 ₸",
        image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?w=600",
        duration: "4 месяца",
        level: "Продвинутый"
    },
    {
        id: 5,
        name: "SQL и базы данных",
        description: "Освойте работу с данными: от простых запросов до оптимизации производительности.",
        price: "39 900 ₸",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?w=600",
        duration: "2 месяца",
        level: "Начинающий"
    },
    {
        id: 6,
        name: "Frontend-разработчик",
        description: "HTML, CSS, JavaScript, React — полный курс по созданию сайтов и веб-приложений.",
        price: "59 900 ₸",
        image: "https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?w=600",
        duration: "4 месяца",
        level: "С нуля"
    }
];

// ЗАГРУЗКА КУРСОВ НА СТРАНИЦУ
function loadCourses() {
    const container = document.getElementById('coursesContainer');
    
    if (!container) {
        console.log("Контейнер не найден!");
        return;
    }
    
    console.log("Загружаем курсы...");
    
    let html = '';
    
    for (let i = 0; i < coursesList.length; i++) {
        const c = coursesList[i];
        html += `
            <div class="course-card" onclick="openCourse(${c.id})">
                <img src="${c.image}" alt="${c.name}">
                <h3>${c.name}</h3>
                <p>${c.description.substring(0, 100)}...</p>
                <div class="course-price">💰 ${c.price}</div>
            </div>
        `;
    }
    
    container.innerHTML = html;
    console.log("Курсы загружены, количество: " + coursesList.length);
}

// ОТКРЫТЬ МОДАЛЬНОЕ ОКНО С КУРСОМ
window.openCourse = function(courseId) {
    const course = coursesList.find(c => c.id === courseId);
    if (!course) return;
    
    const modal = document.getElementById('courseModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2 style="color:#667eea; font-size:32px; margin-bottom:15px;">${course.name}</h2>
        <p style="font-size:18px; line-height:1.6; margin-bottom:20px;">${course.description}</p>
        <p style="font-size:18px; margin-bottom:10px;"><strong>💰 Цена:</strong> ${course.price}</p>
        <p style="font-size:18px; margin-bottom:10px;"><strong>⏱ Длительность:</strong> ${course.duration}</p>
        <p style="font-size:18px; margin-bottom:20px;"><strong>📊 Уровень:</strong> ${course.level}</p>
        
        <div style="margin: 25px 0;">
            <h3 style="font-size:22px; margin-bottom:15px;">Выберите формат обучения:</h3>
            <div class="format-buttons">
                <button class="format-btn btn-online" onclick="selectFormat('online')">💻 Онлайн</button>
                <button class="format-btn btn-offline" onclick="selectFormat('offline')">🏢 Оффлайн</button>
            </div>
        </div>
        
        <div id="formatContact"></div>
    `;
    
    modal.style.display = 'block';
};

// ВЫБОР ФОРМАТА
window.selectFormat = function(format) {
    const phone = "+7 (700) 123-45-67";
    const address = format === 'online' 
        ? 'Zoom / Google Meet ссылка придёт на email' 
        : 'г. Алматы, ул. Абая 10, офис 305';
    const formatName = format === 'online' ? 'Онлайн обучение' : 'Оффлайн обучение';
    
    const contactDiv = document.getElementById('formatContact');
    contactDiv.innerHTML = `
        <div class="contact-box">
            <p style="font-size:18px;">✅ Вы выбрали: <strong>${formatName}</strong></p>
            <p style="margin:15px 0;">📍 ${address}</p>
            <div class="big-phone">
                📞 <a href="tel:${phone.replace(/[^0-9+]/g, '')}">${phone}</a>
            </div>
            <button class="call-btn" onclick="window.location.href='tel:${phone.replace(/[^0-9+]/g, '')}'">
                📞 Позвонить и записаться
            </button>
            <p style="margin-top:15px; font-size:14px;">Или мы перезвоним вам в течение 15 минут</p>
        </div>
    `;
};

// ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА
document.addEventListener('DOMContentLoaded', function() {
    console.log("Страница загружена");
    
    // Загружаем курсы
    loadCourses();
    
    // Настройка модального окна
    const modal = document.getElementById('courseModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };
    }
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});