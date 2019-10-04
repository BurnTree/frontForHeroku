package com.holic.www.backend.service;

import com.holic.www.backend.entity.Category;

import java.util.Optional;

public interface CategoryService {
    Iterable<Category> getAll();
    Optional<Category> findById(long id);
    Category addCategory(Category ctg);
    Category updateCategory(Category ctg);
    void delete(long id);
}
