package com.holic.www.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Title {
    private int idtitle;
    private String name;

    @ManyToOne(targetEntity = Category.class)
    private int id_category;

    @Id
    @Column(name = "idtitle", nullable = false)
    public int getIdtitle() {
        return idtitle;
    }

    public void setIdtitle(int idtitle) {
        this.idtitle = idtitle;
    }

    @Basic
    @Column(name = "name", nullable = true, length = 45)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "id_category", nullable = true, length = 45)
    public int getId_category() {
        return id_category;
    }

    public void setId_category(int id_category) {
        this.id_category = id_category;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Title title = (Title) o;
        return idtitle == title.idtitle &&
                Objects.equals(name, title.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idtitle, name);
    }
}
