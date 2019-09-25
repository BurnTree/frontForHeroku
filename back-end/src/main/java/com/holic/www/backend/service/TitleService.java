package com.holic.www.backend.service;

import com.holic.www.backend.entity.Title;

import java.util.Optional;

public interface TitleService {
    Iterable<Title> getAll();
    Iterable<Title> getAllFromIdCategory(long id);
    Optional<Title> getById(long id);
}
