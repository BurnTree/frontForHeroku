package com.holic.www.backend.entity;

import com.fasterxml.jackson.databind.JsonNode;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import com.vladmihalcea.hibernate.type.json.JsonNodeStringType;
import com.vladmihalcea.hibernate.type.json.JsonStringType;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Goods {
    private int idgoods;
    private String name;
    private String description;

//    @ManyToOne(targetEntity = Title.class)
//    private int id_title;

    @Id
    @Column(name = "idgoods", nullable = false)
    public int getIdgoods() {
        return idgoods;
    }

    public void setIdgoods(int idgoods) {
        this.idgoods = idgoods;
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
    @Column(name = "description", nullable = true)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

//    @Basic
//    @Column(name = "id_title", nullable = true)
//    public int getId_title() {
//        return id_title;
//    }
//
//    public void setId_title(int id_title) {
//        this.id_title = id_title;
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Goods goods = (Goods) o;
        return idgoods == goods.idgoods &&
                Objects.equals(name, goods.name);
//        &&
//                Objects.equals(description, goods.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idgoods, name/*, description*/);
    }
}
