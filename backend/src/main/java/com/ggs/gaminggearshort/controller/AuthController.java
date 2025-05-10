package com.ggs.gaminggearshort.controller;

import com.ggs.gaminggearshort.service.AuthService;
import com.ggs.gaminggearshort.utils.Login.LoginData;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginData loginData) {
        return authService.authenticate(loginData);
    }

}
