package com.holic.www.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Title {
    private long idtitle;
    private String name;
    private long idcategory;

    @Id
    @Column(name = "idtitle", nullable = false)
    public long getIdtitle() {
        return idtitle;
    }

    public void setIdtitle(long idtitle) {
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
    @Column(name = "idcategory", nullable = true, length = 45)
    public long getIdcategory() {
        return idcategory;
    }

    public void setIdcategory(long idcategory) {
        this.idcategory = idcategory;
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
