package com.holic.www.backend.controllers;

import com.holic.www.backend.entity.Title;
import com.holic.www.backend.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/api/title")
public class TitleController {

    public TitleService titleService;

    @Autowired
    public TitleController(TitleService titleService) {
        this.titleService = titleService;
    }

    @GetMapping(value = "/all")
    public Iterable<Title> getTitle() {
        return titleService.getAll();
    }

    @GetMapping(value = "/ctg", params = "idCtg")
    public Iterable<Title> findByCtg(@RequestParam(name = "idCtg") long cat) {
        return this.titleService.getAllFromIdCategory(cat);
    }

    @GetMapping(value = "/{id}")
    public Optional<Title> getById(@PathVariable(name = "id") Long id) {
        return titleService.getById(id);
    }

    @PostMapping(value = "/add")
    public Title add(@RequestBody Title title){
        return titleService.addTitle(title);
    }

    @PutMapping(value = "/change")
    public Title update(@RequestBody Title title){
        return titleService.updateTitle(title);
    }

    @DeleteMapping(value = "/delete/{id}")
    public void delete(@PathVariable(name = "id") long id) {
        titleService.delete(id);
    }
}
