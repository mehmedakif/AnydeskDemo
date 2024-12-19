package com.anydeskdemo.backend.service;

import com.anydeskdemo.backend.model.Product;
import com.anydeskdemo.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public Product createProduct(Product product) {
        productRepository.save(product);
        return product;
    }

    public boolean deleteProduct(Long id) {
        try{
            productRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
