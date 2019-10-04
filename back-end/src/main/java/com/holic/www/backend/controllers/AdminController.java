package com.holic.www.backend.controllers;

import com.holic.www.backend.entity.Category;
import com.holic.www.backend.entity.Goods;
import com.holic.www.backend.entity.Title;
import com.holic.www.backend.service.AuthService;
import com.holic.www.backend.service.CategoryService;
import com.holic.www.backend.service.GoodsService;
import com.holic.www.backend.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

@RestController
@RequestMapping(path = "/api/admin")
public class AdminController {
    private GoodsService goodsService;
    private TitleService titleService;
    private CategoryService categoryService;
    private AuthService authService;

    private class authToken{
        public String token;
    }
    @Autowired
    public AdminController(GoodsService goodsService,
                           TitleService titleService,
                           CategoryService categoryService,
                           AuthService authService) {
        this.goodsService = goodsService;
        this.titleService = titleService;
        this.categoryService = categoryService;
        this.authService = authService;
    }

    @GetMapping(value = "/exa")
    public ResponseEntity<String> getHeader(@RequestHeader("login") String login,
                                            @RequestHeader("password") String pass) {
        if (authService.checkUser(login, pass)) return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        HttpHeaders header = new HttpHeaders();
        header.add("wtf", " its 1");
        header.add("pass", pass);
        return ResponseEntity.ok().headers(header).body("okeeey body");
    }

    @PostMapping(value = "/goods")
    public ResponseEntity<Iterable<Goods>> getAllGoods(@RequestBody authToken token) {
        if (!authService.checkUserForToken(token.token)) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        return ResponseEntity.ok(goodsService.getAll());
    }

    @GetMapping(value = "/login", params = {"login", "password"})
    public ResponseEntity<String> auth(@RequestParam("login") String login,
                                       @RequestParam("password") String pass) {
        if (!authService.checkUser(login, pass))
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("bad Login or Password");
        return ResponseEntity.ok(authService.generateMyToken(login, pass));
    }

    @GetMapping(value = "source")
    public ResponseEntity<Map<Long, Iterable<Title>>> getSource() {
        Iterable<Category> ctgs = categoryService.getAll();
        Map<Long, Iterable<Title>> sourc = new HashMap<Long, Iterable<Title>>();
        for (Category cat : ctgs
        ) {
            sourc.put(cat.getIdcategory(),titleService.getAllFromIdCategory(cat.getIdcategory()));
        }
        return ResponseEntity.ok(sourc);
    }

    @GetMapping(value = "/check")
    public ResponseEntity<Boolean> checkToken(@RequestParam("token") String token){
        System.out.println(token);
        if (!authService.checkUserForToken(token)) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
        return ResponseEntity.ok(true);
    }
}
