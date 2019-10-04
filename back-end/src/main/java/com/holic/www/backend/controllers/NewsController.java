package com.holic.www.backend.controllers;

import com.holic.www.backend.entity.News;
import com.holic.www.backend.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/api/news")
public class NewsController {

    public NewsService newsService;

    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping(value = "/all")
    public Iterable<News> getTitle() {
        return newsService.getAll();
    }

    @GetMapping(value = "/{id}")
    public Optional<News> getById(@PathVariable(name = "id") Long id) {
        return newsService.getById(id);
    }
    @PostMapping(value = "/add")
    public Optional<News> add(@RequestBody News news){
        return newsService.addNews(news);
    }

    @PutMapping(value = "/change")
    public Optional<News> update(@RequestBody News news){
        return newsService.updateNews(news);
    }

    @DeleteMapping(value = "/delete/{id}")
    public void delete(@PathVariable(name = "id") long id) {
        newsService.delete(id);
    }
}
