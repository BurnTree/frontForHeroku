package com.holic.www.backend.service.Impl;

import com.holic.www.backend.service.AuthService;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.scrypt.SCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Override
    public boolean checkUser(String login, String pass) {
        if ("adminSaveWorld".equals(login) && "cryptPass".equals(pass)) return true;
        return false;
    }

    @Override
    public boolean checkUserForToken(String token) {
        if ("-1842334330.1597386399".equals(token)) return true;
        if ("-1842334330.1597385".equals(token)) return true;
        return false;
    }

    @Override
    public String generateMyToken(String login, String pass) {
        return login.hashCode() + "." + pass.hashCode();
    }
}
