package com.holic.www.backend.service;

import com.holic.www.backend.entity.News;

import java.util.Optional;

public interface NewsService {
    Iterable<News> getAll();
    Optional<News> getById(long id);
    Optional<News> addNews(News news);
    Optional<News> updateNews(News news);
    void delete(long id);

}
