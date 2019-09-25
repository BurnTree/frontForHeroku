package com.holic.www.backend.service.Impl;

import com.holic.www.backend.entity.Title;
import com.holic.www.backend.repository.TitleRepository;
import com.holic.www.backend.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TitleServiceImpl implements TitleService {

    @Autowired
    TitleRepository titleRepository;

    @Override
    public Iterable<Title> getAll() {
        return titleRepository.findAll();
    }

    @Override
    public Iterable<Title> getAllFromIdCategory(long id) {
        return titleRepository.findByIdcategory(id);
    }

    @Override
    public Optional<Title> getById(long id) {
        return titleRepository.findById(id);
    }
}
