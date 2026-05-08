package com.eduplatform.backend;

import org.springframework.stereotype.Component;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class CourseFacade {
    
    private final Map<Integer, Course> courses = new ConcurrentHashMap<>();
    
    public CourseFacade() {
        courses.put(1, new Course(1, "JavaScript с нуля до PRO",
            "Изучите самый популярный язык программирования.",
            49900, "3 месяца", "Начинающий",
            "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=600"));
        
        courses.put(2, new Course(2, "Python для начинающих",
            "Анализ данных, веб-разработка, автоматизация.",
            54900, "3 месяца", "Начинающий",
            "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?w=600"));
        
        courses.put(3, new Course(3, "Java-разработчик",
            "Создавайте надёжные бэкенд-системы.",
            59900, "4 месяца", "Средний",
            "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=600"));
        
        courses.put(4, new Course(4, "React + Spring Boot",
            "Полный курс по созданию веб-приложений.",
            69900, "4 месяца", "Продвинутый",
            "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?w=600"));
        
        courses.put(5, new Course(5, "SQL и базы данных",
            "Освойте работу с данными.",
            39900, "2 месяца", "Начинающий",
            "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?w=600"));
        
        courses.put(6, new Course(6, "Frontend-разработчик",
            "HTML, CSS, JavaScript, React.",
            59900, "4 месяца", "С нуля",
            "https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?w=600"));
    }
    
    public List<Course> getAllCourses() {
        return new ArrayList<>(courses.values());
    }
}