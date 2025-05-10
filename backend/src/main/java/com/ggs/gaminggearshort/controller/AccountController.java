package com.ggs.gaminggearshort.controller;


import com.ggs.gaminggearshort.model.Account;
import com.ggs.gaminggearshort.service.AccountService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/admin")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService){
        this.accountService = accountService;
    }

    @GetMapping(path="/accounts")
    public List<Account> getAccounts() {
        return accountService.getAccounts();
    }
}
