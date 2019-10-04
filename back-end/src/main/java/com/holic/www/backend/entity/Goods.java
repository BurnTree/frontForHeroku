package com.holic.www.backend.entity;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import com.vladmihalcea.hibernate.type.json.JsonNodeStringType;
import com.vladmihalcea.hibernate.type.json.JsonStringType;

import javax.persistence.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import org.json.*;

@Entity
public class Goods {

    private long idgoods;
    private String name;
    private String description;

    @ManyToOne(targetEntity = Title.class)
    private long idtitle;

    private String shDes;
    private String photo;

    @Id
    @Column(name = "idgoods", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getIdgoods() {
        return idgoods;
    }

    public void setIdgoods(long idgoods) {
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
    @Column(name = "description",columnDefinition = "json", nullable = true)
    public String  getDescription() {
        return description;
    }

    public void setDescription(String  description) {
        this.description = description;
    }

    @Basic
    @Column(name = "idtitle", nullable = true)
    public long getIdtitle() {
        return idtitle;
    }

    public void setIdtitle(long idtitle) {
        this.idtitle = idtitle;
    }

    @Basic
    @Column(name = "short", nullable = true)
    public String getShDes() {
        return shDes;
    }

    public void setShDes(String shDes) {
        this.shDes = shDes;
    }

    @Basic
    @Column(name = "photo", nullable = true)
    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

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
