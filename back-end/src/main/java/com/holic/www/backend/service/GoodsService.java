package com.holic.www.backend.service;

import com.holic.www.backend.entity.Goods;
import com.holic.www.backend.entity.Maindata;

import java.util.Optional;

public interface GoodsService {
    Iterable<Goods> getAll();
    Iterable<Goods> getByIdTitle(long id);
    Optional<Goods> getById(long id);
    Iterable<Maindata> getTable(long id);
}
