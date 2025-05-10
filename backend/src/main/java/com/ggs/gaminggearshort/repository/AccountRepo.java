package com.ggs.gaminggearshort.repository;

import com.ggs.gaminggearshort.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepo extends JpaRepository<Account, Long> {
    Optional<Account> findByUsername(String username);
}
