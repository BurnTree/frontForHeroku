package com.holic.www.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Maindata {
    private long id;
    private String name;
    private String value;
    private long idgoods;

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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
    @Column(name = "value", nullable = true, length = 45)
    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Column(name = "idgoods", nullable = false)
    public long getIdgoods() {
        return idgoods;
    }

    public void setIdgoods(long idgoods) {
        this.idgoods = idgoods;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Maindata maindata = (Maindata) o;
        return id == maindata.id &&
                Objects.equals(name, maindata.name) &&
                Objects.equals(value, maindata.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, value);
    }
}
