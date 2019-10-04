package com.holic.www.backend.service.Impl;

import com.holic.www.backend.entity.Category;
import com.holic.www.backend.repository.CategoryRepository;
import com.holic.www.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public Iterable<Category> getAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Optional<Category> findById(long id) {
        return categoryRepository.findById( id);
    }

    @Override
    public Category addCategory(Category ctg) {
        return categoryRepository.save(ctg);
    }

    @Override
    public Category updateCategory(Category ctg) {
        return categoryRepository.save(ctg);
    }

    @Override
    public void delete(long id) {
        categoryRepository.deleteById(id);
    }
}
