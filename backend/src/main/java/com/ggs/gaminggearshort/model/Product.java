package com.ggs.gaminggearshort.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="PRODUCT")
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @Column(name="Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="Name", nullable=false, length=50)
    private String name;

    @Column(name="Type", nullable=false, length=50)
    private String type;

    @Column(name="Description", nullable=false, length=200)
    private String description;

    @Column(name="Price", length=10)
    private int price;
}
