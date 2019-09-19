package com.holic.www.backend.controllers;

import com.holic.www.backend.entity.Category;
import com.holic.www.backend.entity.Goods;
import com.holic.www.backend.entity.Title;
import com.holic.www.backend.service.CategoryService;
import com.holic.www.backend.service.GoodsService;
import com.holic.www.backend.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class helloController {

    public CategoryService categoryService;
    public GoodsService goodsService;
    public TitleService titleService;

    @Autowired
    public helloController(CategoryService categoryService, TitleService titleService, GoodsService goodsService) {
        this.categoryService = categoryService;
        this.titleService = titleService;
        this.goodsService = goodsService;

    }

    @GetMapping(value = "test")
    public String findProjectById() {
        return "asd";
    }

    @GetMapping(value = "data")
    public Iterable<Category> getall() {
        return categoryService.getAll();
    }

    @GetMapping(value = "title")
    public Iterable<Title> getTitle(){return titleService.getAll();}

    @GetMapping(value = "good")
    public Iterable<Goods> getallGoods(){
        return goodsService.getAll();
    }

}
