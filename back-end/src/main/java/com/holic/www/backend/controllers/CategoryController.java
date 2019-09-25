package com.holic.www.backend.controllers;

import com.holic.www.backend.entity.Category;
import com.holic.www.backend.entity.Title;
import com.holic.www.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/api/category")
public class CategoryController {
    private CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }


    @GetMapping(value = "/all")
    public Iterable<Category> getCategory(){return categoryService.getAll();}

    @GetMapping(value = "/{id}")
    public Optional<Category> getById(@PathVariable(name = "id") Long id){
        return categoryService.findById(id);
    }
}
