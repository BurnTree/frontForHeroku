package com.holic.www.backend.service.Impl;

import com.holic.www.backend.entity.Goods;
import com.holic.www.backend.repository.GoodsRepository;
import com.holic.www.backend.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class GoodsServiceImpl implements GoodsService {

    @Autowired
    GoodsRepository goodsRepository;

    @Override
    public Iterable<Goods> getAll() {
        return goodsRepository.findAll();
    }
}
