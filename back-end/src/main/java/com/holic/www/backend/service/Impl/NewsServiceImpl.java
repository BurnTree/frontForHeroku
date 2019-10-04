package com.holic.www.backend.service.Impl;

import com.holic.www.backend.entity.News;
import com.holic.www.backend.repository.NewsRepository;
import com.holic.www.backend.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NewsServiceImpl implements NewsService {

    @Autowired
    NewsRepository newsRepository;

    @Override
    public Iterable<News> getAll() {
        return newsRepository.findAll();
    }

    @Override
    public Optional<News> getById(long id) {
        return newsRepository.findById(id);
    }

    @Override
    public Optional<News> addNews(News news) {
        News changeNews = newsRepository.save(news);
        return Optional.of(changeNews);
    }

    @Override
    public Optional<News> updateNews(News news) {
        News changeNews = newsRepository.save(news);
        return Optional.of(changeNews);
    }

    @Override
    public void delete(long id) {
        newsRepository.deleteById(id);
    }
}
