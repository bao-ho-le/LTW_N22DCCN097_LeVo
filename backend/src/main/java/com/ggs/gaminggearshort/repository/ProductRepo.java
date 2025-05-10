package com.ggs.gaminggearshort.repository;

import com.ggs.gaminggearshort.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product, Long> {
}
