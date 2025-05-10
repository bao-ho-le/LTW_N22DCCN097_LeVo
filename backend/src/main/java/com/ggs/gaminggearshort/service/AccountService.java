package com.ggs.gaminggearshort.service;

import com.ggs.gaminggearshort.model.Account;
import com.ggs.gaminggearshort.repository.AccountRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService{

    private final AccountRepo accountRepo;

    public AccountService(AccountRepo accountRepo) {
        this.accountRepo = accountRepo;
    }

    public List<Account> getAccounts() {
        return accountRepo.findAll();
    }
}
