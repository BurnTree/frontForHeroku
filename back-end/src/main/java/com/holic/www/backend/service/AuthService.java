package com.holic.www.backend.service;

public interface AuthService {
    boolean checkUser(String login, String pass);
    String generateMyToken(String login, String pass);
    boolean checkUserForToken(String token);
}
