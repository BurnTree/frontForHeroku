package com.holic.www.backend.repository;

import com.holic.www.backend.entity.Goods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface GoodsRepository extends CrudRepository<Goods,Long> {
    Iterable<Goods> findByIdtitle(long id);
}
