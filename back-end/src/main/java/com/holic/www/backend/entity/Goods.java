//package com.holic.www.backend.entity;
//
//import javax.persistence.Basic;
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import java.util.Arrays;
//import java.util.Objects;
//
//@Entity
//public class Goods {
//    private int id;
//    private String name;
//    private Object description;
//    private byte[] image;
//
//    @Id
//    @Column(name = "id", nullable = false)
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    @Basic
//    @Column(name = "name", nullable = false, length = 45)
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    @Basic
//    @Column(name = "description", nullable = false)
//    public Object getDescription() {
//        return description;
//    }
//
//    public void setDescription(Object description) {
//        this.description = description;
//    }
//
//    @Basic
//    @Column(name = "image", nullable = true)
//    public byte[] getImage() {
//        return image;
//    }
//
//    public void setImage(byte[] image) {
//        this.image = image;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        Goods goods = (Goods) o;
//        return id == goods.id &&
//                Objects.equals(name, goods.name) &&
//                Objects.equals(description, goods.description) &&
//                Arrays.equals(image, goods.image);
//    }
//
//    @Override
//    public int hashCode() {
//        int result = Objects.hash(id, name, description);
//        result = 31 * result + Arrays.hashCode(image);
//        return result;
//    }
//}
