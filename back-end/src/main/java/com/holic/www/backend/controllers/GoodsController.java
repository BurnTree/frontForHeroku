package com.holic.www.backend.controllers;

import com.holic.www.backend.entity.Category;
import com.holic.www.backend.entity.Goods;
import com.holic.www.backend.entity.Maindata;
import com.holic.www.backend.entity.Title;
import com.holic.www.backend.service.GoodsService;
import org.apache.commons.io.IOUtils;
import org.hibernate.validator.constraints.URL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import sun.applet.Main;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path = "/api/goods")
public class GoodsController {

    private GoodsService goodsService;
    final String imgUrl = "back-end/src/main/java/image/";

    @Autowired
    public GoodsController(GoodsService goodsService) {
        this.goodsService = goodsService;
    }

    @GetMapping(value = "/all")
    public Iterable<Goods> getGoods() {
        return goodsService.getAll();
    }

    @GetMapping(value = "/ttl", params = "idTtl")
    public Iterable<Goods> findByTtl(@RequestParam(name = "idTtl") long titl) {
        return this.goodsService.getByIdTitle(titl);
    }

    @GetMapping(value = "/{id}")
    public Optional<Goods> getById(@PathVariable(name = "id") long id) {
        return goodsService.getById(id);
    }

    @GetMapping(value = "/data/{id}")
    public Iterable<Maindata> getTable(@PathVariable(name = "id") long id) {
        return goodsService.getTable(id);
    }

    @GetMapping(value = "/newPhoto", produces = MediaType.IMAGE_JPEG_VALUE)
    public @ResponseBody
    byte[] Im() throws IOException {
        FileInputStream in = new FileInputStream(imgUrl + "123.jpg");
        return IOUtils.toByteArray(in);
    }

    @GetMapping(value = "/{id}/image", produces = MediaType.IMAGE_JPEG_VALUE)
    public @ResponseBody
    byte[] getImage(@PathVariable(name = "id") long id) throws IOException {
        Optional<Goods> prod = goodsService.getById(id);
        String path = prod.get().getPhoto();
        FileInputStream in = new FileInputStream(imgUrl + path);
        return IOUtils.toByteArray(in);
    }

    @PostMapping(value = "/add")
    public Optional<Goods> add(@RequestBody Goods goods){
        return goodsService.addGoods(goods);
    }

    @PutMapping(value = "/change")
    public Optional<Goods> update(@RequestBody Goods goods){
        return goodsService.updateGoods(goods);
    }

    @DeleteMapping(value = "/delete/{id}")
    public void delete(@PathVariable(name = "id") long id) {
        goodsService.deleteData(goodsService.getTable(id));
        goodsService.delete(id);
    }

    @PostMapping(value = "/addData")
    public Iterable<Maindata>  addData(@RequestBody Iterable<Maindata> maindata){
        Iterable<Maindata> itData = new ArrayList<Maindata>();
        for (Maindata da: maindata
             ) {
            ((ArrayList<Maindata>) itData).add(goodsService.addData(da));
        }
        return itData;
    }

    @PutMapping(value = "/changeData")
    public Iterable<Maindata>  updateData(@RequestBody Iterable<Maindata> maindata){
        return goodsService.updateData(maindata);
    }

    @DeleteMapping(value = "/deleteData/{id}")
    public void deleteData(@PathVariable(name = "id") long id) {
        goodsService.deleteData(goodsService.getTable(id));
    }
}
