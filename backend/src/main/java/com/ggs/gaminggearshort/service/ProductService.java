package com.ggs.gaminggearshort.service;

import com.ggs.gaminggearshort.model.Product;
import com.ggs.gaminggearshort.repository.ProductRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    public ProductRepo productRepo;

    public ProductService(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    public List<Product> getProducts(){
        return productRepo.findAll();
    }

    public void deleteProduct(long id){

        if(productRepo.existsById(id)){
            productRepo.deleteById(id);
        }else{
            throw new RuntimeException("Product not found");
        }
    }

    public void updateProductPrice(Long id, int newPrice){
        Product product = productRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        product.setPrice(newPrice);
        productRepo.save(product);
    }

    public Product addProduct(Product product){
        return productRepo.save(product);
    }
}
