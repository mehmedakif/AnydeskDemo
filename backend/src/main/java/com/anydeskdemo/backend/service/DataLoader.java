package com.anydeskdemo.backend.service;

import com.anydeskdemo.backend.model.Product;
import com.anydeskdemo.backend.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final ProductRepository productRepository;

    public DataLoader(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (productRepository.count() == 0) {
            productRepository.save(new Product(
                    "Smartphone",
                    "Smartphone Description",
                    "http://example.com/product-image.jpg",
                    900.0));
            productRepository.save(new Product(
                    "Monitor",
                    "Monitor Description",
                    "http://example.com/product-image.jpg",
                    130.0));
            productRepository.save(new Product(
                    "Router",
                    "Router Description",
                    "http://example.com/product-image.jpg",
                    400.0));
            productRepository.save(new Product(
                    "Macbook",
                    "Macbook Description",
                    "http://example.com/product-image.jpg",
                    1299.0));
            productRepository.save(new Product(
                    "Xbox",
                    "Xbox Description",
                    "http://example.com/product-image.jpg",
                    530.0));
        }
    }
}
