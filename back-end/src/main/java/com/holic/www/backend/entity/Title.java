package com.holic.www.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Title {
    private int id;
    private String name;

    @ManyToOne(targetEntity = Category.class)
    private Category category_id;

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name", nullable = false, length = 45)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getCategory_id() {
        return category_id;
    }

    public void setCategory_id(Category category_id) {
        this.category_id = category_id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Title title = (Title) o;
        return id == title.id &&
                Objects.equals(name, title.name) &&
                Objects.equals(category_id, title.category_id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}
