package com.holic.www.backend.service.Impl;

import com.holic.www.backend.entity.Title;
import com.holic.www.backend.repository.TitleRepository;
import com.holic.www.backend.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TitleServiceImpl implements TitleService {

    @Autowired
    TitleRepository titleRepository;

    @Override
    public Iterable<Title> getAll() {
        return titleRepository.findAll();
    }
}
