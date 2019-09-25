package com.holic.www.backend.repository;

import com.holic.www.backend.entity.Maindata;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRepository extends JpaRepository<Maindata,Long> {
    Iterable<Maindata> findByIdgoods(long id);
}
