package com.ggs.gaminggearshort.controller;


import com.ggs.gaminggearshort.model.Product;
import com.ggs.gaminggearshort.service.ProductService;
import lombok.Data;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path={"/user", "admin"})
@Data
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(path="/products")
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @DeleteMapping(path="/products/{id}")
    public void deleteProduct(@PathVariable long id){
        productService.deleteProduct(id);
    }

    @PutMapping(path="/products/{id}")
    public void updateProduct(@PathVariable long id, @RequestBody Product product){
        productService.updateProductPrice(id, product.getPrice());
    }

    @PostMapping(path="/products")
    public Product addProduct(@RequestBody Product product){
        return productService.addProduct(product);
    }
}
