package com.holic.www.backend.service.Impl;

import com.holic.www.backend.entity.Goods;
import com.holic.www.backend.entity.Maindata;
import com.holic.www.backend.repository.DataRepository;
import com.holic.www.backend.repository.GoodsRepository;
import com.holic.www.backend.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class GoodsServiceImpl implements GoodsService {

    @Autowired
    GoodsRepository goodsRepository;
    @Autowired
    DataRepository dataRepository;

    @Override
    public Iterable<Goods> getAll() {
        return goodsRepository.findAll();
    }

    @Override
    public Iterable<Goods> getByIdTitle(long id) {
        return goodsRepository.findByIdtitle(id);
    }

    @Override
    public Optional<Goods> getById(long id) {
        return goodsRepository.findById(id);
    }

    @Override
    public Iterable<Maindata> getTable(long id) {
        return dataRepository.findByIdgoods(id);
    }


}
