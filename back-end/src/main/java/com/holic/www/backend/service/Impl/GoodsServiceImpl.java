package com.holic.www.backend.service.Impl;

import com.holic.www.backend.entity.Goods;
import com.holic.www.backend.entity.Maindata;
import com.holic.www.backend.repository.DataRepository;
import com.holic.www.backend.repository.GoodsRepository;
import com.holic.www.backend.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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

    @Override
    public Optional<Goods> addGoods(Goods goods) {
        Goods newGoods = goodsRepository.saveAndFlush(goods);
        goodsRepository.flush();
        System.out.println("wtf" + newGoods.getIdgoods());
        return Optional.of(newGoods);
    }

    @Override
    public Optional<Goods> updateGoods(Goods goods) {
        return Optional.of(goodsRepository.saveAndFlush(goods));
    }

    @Override
    public void delete(long id) {
        goodsRepository.deleteById(id);
    }

    @Override
    public Maindata addData(Maindata maindata) {
        return dataRepository.save(maindata);
    }

    @Override
    public Iterable<Maindata> updateData(Iterable<Maindata> maindata) {
        return dataRepository.saveAll(maindata);
    }

    @Override
    public void deleteData(Iterable<Maindata> maindata) {
        dataRepository.deleteAll(maindata);
    }

}
