package com.ggs.gaminggearshort.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "ACCOUNT")
@AllArgsConstructor
@NoArgsConstructor
public class Account{

    @Id
    @Column(name="Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="Username", nullable=false, length=50)
    private String username;

    @Column(name="Password", nullable=false, length=50)
    private String password;

    @Column(name="Name", nullable=false, length=50)
    private String name;

    @Column(name="Role", nullable=false, length=10)
    private String role;

    @Column(name="Address", nullable=false, length=200)
    private String address;
}