package com.lucas.ecomm.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "cartao")
@Data
public class CartaoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "cliente_id", nullable = false)
    private ClienteModel cliente;

    @Column(name = "numero_mascarado", nullable = false, length = 20)
    private String numeroMascarado;

    @Column(nullable = false)
    private LocalDate validade;

    @Column(nullable = false)
    private Boolean preferencial;
}
