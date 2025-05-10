package com.ggs.gaminggearshort.service;

import com.ggs.gaminggearshort.model.Account;
import com.ggs.gaminggearshort.repository.AccountRepo;
import com.ggs.gaminggearshort.utils.Login.AuthResponse;
import com.ggs.gaminggearshort.utils.Login.LoginData;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final AccountRepo accountRepo;


    public AuthService(AccountRepo accountRepo) {
        this.accountRepo = accountRepo;
    }

    public ResponseEntity<?> authenticate(LoginData loginData){
        Optional<Account> account = accountRepo.findByUsername(loginData.getUsername());

        if(account.isPresent() && account.get().getPassword().equals(loginData.getPassword())){
            return ResponseEntity.ok(new AuthResponse(account.get().getRole()));
        }
        else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
