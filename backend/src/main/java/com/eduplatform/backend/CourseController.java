package com.eduplatform.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {
    
    @Autowired
    private CourseFacade facade;
    
    @GetMapping
    public List<Course> getAllCourses() {
        return facade.getAllCourses();
    }
}