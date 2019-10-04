package com.holic.www.backend.service;

import com.holic.www.backend.entity.Goods;
import com.holic.www.backend.entity.Maindata;
import sun.applet.Main;

import java.util.Optional;

public interface GoodsService {
    Iterable<Goods> getAll();
    Iterable<Goods> getByIdTitle(long id);
    Optional<Goods> getById(long id);
    Iterable<Maindata> getTable(long id);
    Optional<Goods> addGoods(Goods goods);
    Optional<Goods> updateGoods(Goods goods);
    void delete(long id);
    Maindata addData(Maindata maindata);
    Iterable<Maindata> updateData(Iterable<Maindata> maindata);
    void deleteData(Iterable<Maindata> maindata);
}
