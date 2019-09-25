package com.holic.www.backend.repository;

import com.holic.www.backend.entity.Title;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TitleRepository extends JpaRepository<Title,Long> {
    Iterable<Title> findByIdcategory(long idcategory);
}
