package com.eduplatform.backend;

public class Course {
    private int id;
    private String name;
    private String description;
    private int price;
    private String duration;
    private String level;
    private String image;

    public Course() {}

    public Course(int id, String name, String description, int price, String duration, String level, String image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.duration = duration;
        this.level = level;
        this.image = image;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public int getPrice() { return price; }
    public void setPrice(int price) { this.price = price; }
    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }
    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }
    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
}